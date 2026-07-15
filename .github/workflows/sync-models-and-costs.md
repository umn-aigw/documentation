---
emoji: 📊
description: Refresh docs/gateway/models-and-costs.md from LiteLLM model group metadata
on:
  workflow_dispatch:
permissions:
  contents: read
strict: false
tools:
  bash: ["*"]
network:
  allowed:
    - defaults
    - gateway.loonai.umn.edu
env:
  LITELLM_GATEWAY_API_KEY: ${{ secrets.LITELLM_GATEWAY_API_KEY }}
safe-outputs:
  jobs:
    commit-models-and-costs:
      description: Commit docs/gateway/models-and-costs.md directly to main
      permissions:
        contents: write
      inputs:
        table_markdown:
          description: Markdown table content with header and rows
          required: true
          type: string
        commit_message:
          description: Commit message
          required: false
          type: string
      steps:
        - name: Checkout main
          uses: actions/checkout@v4
          with:
            ref: main
            fetch-depth: 0

        - name: Update model table
          run: |
            node - <<'NODE'
            const fs = require("node:fs");
            const file = "docs/gateway/models-and-costs.md";
            const header = "| Model Name | Capabilities | Approved Data Classification |";
            const payload = JSON.parse(fs.readFileSync(process.env.GH_AW_AGENT_OUTPUT, "utf8"));
            const item = payload.items.find((entry) => entry.type === "commit_models_and_costs");

            if (!item) {
              throw new Error("No commit_models_and_costs output found.");
            }
            if (!item.table_markdown || typeof item.table_markdown !== "string") {
              throw new Error("table_markdown is required.");
            }

            const table = item.table_markdown.trimEnd();
            const content = fs.readFileSync(file, "utf8");
            const lines = content.split("\n");
            const start = lines.findIndex((line) => line.trim() === header);
            if (start < 0) {
              throw new Error("Could not find model table header.");
            }

            let end = start + 1;
            while (end < lines.length && lines[end].trim().startsWith("|")) {
              end += 1;
            }

            const next = [
              ...lines.slice(0, start),
              ...table.split("\n"),
              ...lines.slice(end),
            ].join("\n");
            fs.writeFileSync(file, next);
            NODE

        - name: Commit and push changes
          run: |
            git config user.name "github-actions[bot]"
            git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

            if git diff --quiet -- docs/gateway/models-and-costs.md; then
              echo "No table changes to commit."
              exit 0
            fi

            commit_message="$(jq -r '.items[] | select(.type == "commit_models_and_costs") | .commit_message // "docs: sync models and costs from LiteLLM gateway" | select(. != "")' "$GH_AW_AGENT_OUTPUT" | head -n 1)"
            if [ -z "$commit_message" ]; then
              commit_message="docs: sync models and costs from LiteLLM gateway"
            fi

            git add docs/gateway/models-and-costs.md
            git commit -m "$commit_message"
            git push origin HEAD:main
---

# Sync Models and Costs

## Task

Update `docs/gateway/models-and-costs.md` from the LiteLLM gateway model group `umn-default-active-models`.

1. Fetch model metadata from:
   - `https://gateway.loonai.umn.edu/model_group/info?model_group=umn-default-active-models`
2. Authenticate with header:
   - `x-api-key: $LITELLM_GATEWAY_API_KEY`
3. Parse response JSON from `.data[]`.
4. Build rows sorted by `model_group` ascending.
5. Replace the table under `## Current Model List` using this exact header:

   `| Model Name | Capabilities | Approved Data Classification |`

Use this capability mapping:
- Start with `.mode` when present.
- Add `Vision` when `supports_vision` is true.
- Add `Function Calling` when `supports_function_calling` is true.
- Add `Parallel Function Calling` when `supports_parallel_function_calling` is true.
- Join capabilities with `, `.
- If no capabilities exist, use `N/A`.

Set `Approved Data Classification` to `Public, Private-Restricted` for every row.

Preserve all text outside the table.

## Completion Rules

- If fetch fails, response is invalid, or `.data` is empty, call `noop` with a short explanation.
- If generated table is identical to the current file, call `noop`.
- If the table changed, call `commit_models_and_costs` with:
  - `table_markdown`: full markdown table (header + alignment + rows)
  - `commit_message`: concise commit message
