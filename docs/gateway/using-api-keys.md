# API Keys and Access

The LoonAI Gateway uses team-scoped API keys.

## Why Team-Scoped Keys Matter

Each key is tied to a team for usage accounting and chargeback. If you belong to multiple teams, you may need separate keys for each project.

## Create a New Key

1. Open the **Virtual Keys** section in the gateway UI.
2. Select **Create a new key**.
3. Choose the correct team.
4. Provide a descriptive key name.
5. Leave advanced fields at defaults unless you need custom behavior. See the budget control section for more information.
6. Create the key and copy it immediately.

> [!WARNING]
> You will not be able to view the full key value again after creation.

## Secure Key Handling

- Store keys in a secret manager or environment variables.
- Never hard-code keys into source files.
- Never commit keys to Git.
- Rotate keys if exposure is suspected.

## API Usage Example (Python)

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_GATEWAY_KEY",
    base_url="https://gateway.ai.umn.edu"
)

response = client.chat.completions.create(
    model="gpt-4.1-mini",
    messages=[
        {"role": "user", "content": "Write a short welcome message for new students."}
    ]
)

print(response.choices[0].message.content)
```

## Minimum Required Parameters

- `api_key`: your API key
- `base_url`: gateway endpoint
- `model`: selected model in the catalog

## Budget Control

When creating a key, you can usually set limits that protect your project from accidental overuse:

- `RPM (requests per minute)`: caps how many calls the key can make each minute.
- `TPM (tokens per minute)`: caps token throughput per minute.
- `Max parallel requests`: limits concurrent calls to prevent request spikes.
- `Model restrictions` (if enabled): allow only specific models for this key.
- `Key budget cap` and/or reset window (if shown): set a lower self-imposed spending limit for this key.

Use these controls to start conservative and then adjust upward based on real usage.

> [!IMPORTANT]
> You can tighten limits on your own key, but you cannot increase your team or account budget from the key form. Budget increases are an admin-controlled setting.


## Common Troubleshooting

- `401 Unauthorized`: key is invalid, expired, or belongs to a different team
- `403 Forbidden`: network access issue or account restriction
- `429 Too Many Requests`: request rate or budget limit reached
