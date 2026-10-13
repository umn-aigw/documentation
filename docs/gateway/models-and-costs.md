<script setup>
import { computed, ref } from 'vue'

const columns = [
  { label: 'Model Developer' },
  { label: 'Model Name' },
  { label: 'Capabilities' },
  { label: 'Approved Data Classification' },
  { label: 'Input Cost (per 1M tokens)', numeric: true },
  { label: 'Output Cost (per 1M tokens)', numeric: true },
]

const models = [
  ["Microsoft", "azure-tts", "audio_speech", "Public", "N/A", "N/A"],
  ["DeepSeek", "deepseek-v4-flash", "chat, Function Calling", "Public", "$0.3000", "$1.20"],
  ["DeepSeek", "deepseek-v4-pro", "chat, Function Calling", "Public", "$1.32", "$3.96"],
  ["Google", "gemini-3-pro-image", "image_generation, Vision, Web Search", "Public", "$2.00", "$12.00"],
  ["Google", "gemini-3.1-flash-image", "image_generation, Vision, Web Search", "Public", "$0.5000", "$3.00"],
  ["Google", "gemini-3.1-pro-preview", "chat, Vision, Web Search, Url Context, Reasoning, Function Calling", "Public", "$2.00", "$12.00"],
  ["Google", "gemini-3.5-flash-lite", "chat, Vision, Web Search, Url Context, Reasoning, Function Calling", "Public", "$0.3000", "$2.50"],
  ["Google", "gemini-3.7-flash", "chat, Vision, Web Search, Url Context, Reasoning, Function Calling", "Public", "$0.7500", "$3.75"],
  ["Google", "gemini-3.8-flash", "chat", "Public", "$0.7500", "$3.75"],
  ["Google", "gemini-4-argon", "chat, Vision, Web Search, Url Context, Reasoning, Function Calling", "Public", "$2.00", "$10.00"],
  ["OpenAI", "gpt-5.4", "chat, Vision, Web Search, Reasoning, Function Calling", "Public", "$2.50", "$15.00"],
  ["OpenAI", "gpt-5.4-mini", "chat", "Public", "$0.7500", "$4.50"],
  ["OpenAI", "gpt-5.4-nano", "chat", "Public", "$0.2000", "$1.25"],
  ["OpenAI", "gpt-5.4-pro", "responses, Vision, Web Search, Reasoning, Function Calling", "Public", "$30.00", "$180.00"],
  ["OpenAI", "gpt-5.5", "chat, Vision, Web Search, Reasoning, Function Calling", "Public", "$5.00", "$30.00"],
  ["OpenAI", "gpt-5.6-luna", "chat", "Public", "$0.2000", "$1.20"],
  ["OpenAI", "gpt-5.6-sol", "chat", "Public", "$4.00", "$20.00"],
  ["OpenAI", "gpt-5.6-terra", "chat", "Public", "$2.20", "$13.20"],
  ["OpenAI", "gpt-6-astra", "chat", "Public", "$10.00", "$50.00"],
  ["OpenAI", "gpt-6-luna", "chat, Vision, Web Search, Reasoning, Function Calling", "Public", "$0.1000", "$0.5000"],
  ["OpenAI", "gpt-6-sol", "chat, Vision, Web Search, Reasoning, Function Calling", "Public", "$2.00", "$10.00"],
  ["OpenAI", "gpt-6.1-sol", "chat, Vision, Web Search, Reasoning, Function Calling", "Public", "$2.00", "$10.00"],
  ["OpenAI", "gpt-image-2", "image_generation", "Public", "$5.00", "N/A"],
  ["Moonshot AI", "kimi-k2.6", "chat, Vision, Reasoning, Function Calling", "Public", "$0.9500", "$4.00"],
  ["Meta", "llama4-maverick-17b-instruct-v1:0", "chat, Function Calling", "Public", "$0.2400", "$0.9700"],
  ["Meta", "llama4-scout-17b-instruct-v1:0", "chat, Function Calling", "Public", "$0.1700", "$0.6600"],
  ["OpenAI", "mantle-gpt-5.4", "responses, Vision, Reasoning, Function Calling", "Public", "$2.75", "$16.50"],
  ["OpenAI", "mantle-gpt-5.5", "responses, Vision, Reasoning, Function Calling", "Public", "$5.50", "$33.00"],
  ["OpenAI", "mantle-gpt-5.6-luna", "responses, Vision, Reasoning, Function Calling", "Public", "$0.2200", "$1.32"],
  ["OpenAI", "mantle-gpt-5.6-sol", "responses, Vision, Reasoning, Function Calling", "Public", "$4.40", "$22.00"],
  ["OpenAI", "mantle-gpt-6-astra", "responses, Vision, Reasoning, Function Calling", "Public", "$11.00", "$55.00"],
  ["Microsoft", "Microsoft-Decision-1", "chat", "Public", "$0.0420", "N/A"],
  ["Mistral AI", "mistral-medium-3-5", "chat", "Public", "$1.50", "$7.50"],
  ["Mistral AI", "mistral-ocr-4-0", "ocr", "Public", "N/A", "N/A"],
  ["OpenAI", "text-embedding-3-large", "embedding", "Public", "$0.1300", "N/A"],
  ["Z.ai", "zai.glm-4.7", "chat, Reasoning, Function Calling", "Public", "$0.6000", "$2.20"],
  ["Z.ai", "zai.glm-4.7-flash", "chat, Reasoning, Function Calling", "Public", "$0.0700", "$0.4000"],
  ["Z.ai", "zai.glm-5", "chat, Reasoning, Function Calling", "Public", "$1.00", "$3.20"],
]

const sortColumn = ref(null)
const sortDirection = ref('ascending')
const collator = new Intl.Collator('en', { sensitivity: 'base' })

function sortBy(index) {
  sortDirection.value = sortColumn.value === index && sortDirection.value === 'ascending'
    ? 'descending'
    : 'ascending'
  sortColumn.value = index
}

const sortedModels = computed(() => {
  if (sortColumn.value === null) return models

  const index = sortColumn.value
  const direction = sortDirection.value === 'ascending' ? 1 : -1
  return [...models].sort((a, b) => {
    if (columns[index].numeric) {
      // Keep unavailable prices last in either direction.
      if (a[index] === 'N/A') return b[index] === 'N/A' ? 0 : 1
      if (b[index] === 'N/A') return -1
      return direction * (Number(a[index].replace('$', '')) - Number(b[index].replace('$', '')))
    }
    return direction * collator.compare(a[index], b[index])
  })
})
</script>

# Models, Pricing, and Limits

The gateway supports models from multiple providers through one endpoint.

## Choosing a Model

Select models based on:

- Quality requirements
- Latency tolerance
- Cost sensitivity
- Feature support (vision, tool use, long context, and more)

Not all models support the same capabilities.

## Current and Legacy Versions

By default, users generally retain access to:

- Current model versions
- One previous version (when available)

If you need older legacy versions for compatibility, submit a request to the support team. Legacy availability is sometimes limited by providers. For example, if a vulnerability is discovered in a legacy model, a provider may withdraw that model.

Keep this in mind when designing long-running studies.

## New Model Availability

The target turnaround for onboarding newly released models is typically 24-48 hours after provider release.

Some releases may take longer because of validation, policy review, or provider capacity constraints.

## Managing Spend

Use layered controls:

- Team budget caps
- Key-level limits where needed
- Rate limiting for burst control
- Routine usage reviews and cleanup of unused keys

## Practical Cost Controls

1. Start with lower-cost models during development.
2. Limit max output tokens for automated workflows.
3. Cache repeatable prompts where possible.
4. Move high-value workloads to stronger models only when justified.

## Current Model List

Below you'll find a table of our currently available models. We've launched with a limited set of models, because we're looking for feedback from the user community about what's actually useful. We can add any first party models available via AWS Bedrock, Azure Foundry or Google Cloud Platform VertexAI. If you have a request for a model, please contact [aigateway@umn.edu](mailto:aigateway@umn.edu).


<table class="model-table">
  <thead>
    <tr>
      <th v-for="(column, index) in columns" :key="column.label" scope="col" :aria-sort="sortColumn === index ? sortDirection : 'none'">
        <button type="button" @click="sortBy(index)">
          {{ column.label }}
          <span aria-hidden="true">{{ sortColumn === index ? (sortDirection === 'ascending' ? '▲' : '▼') : '↕' }}</span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="model in sortedModels" :key="model[1]">
      <td v-for="(value, index) in model" :key="index">{{ value }}</td>
    </tr>
  </tbody>
</table>

<style scoped>
.model-table th button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.model-table th button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}
</style>

::: info A note on Anthropic models
Adding support for Anthropic models is the number one priority for the AI Gateway team, and university IT leadership. We are actively working with Anthropic to get their models available through the gateway. We will provide updates on progress and availability as soon as we have them.
:::

::: info A note on Bedrock Mantle models
The OpenAI models hosted via AWS Bedrock Mantle currently only support the Responses API. The LiteLLM project is actively working to add support for the Completions API, and we expect that to be available in the near future.
:::
