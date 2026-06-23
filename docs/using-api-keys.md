# API Keys and Access

The LoonAI Gateway uses team-scoped API keys.

## Why Team-Scoped Keys Matter

Each key is tied to a team for usage accounting and chargeback. If you belong to multiple teams, you may need separate keys for each project.

## Create a New Key

1. Open the **Virtual Keys** section in the gateway UI.
2. Select **Create a new key**.
3. Choose the correct team.
4. Provide a descriptive key name.
5. Leave advanced fields at defaults unless you need custom behavior.
6. Create the key and copy it immediately.

!!! warning
    You will not be able to view the full key value again after creation.

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

## Common Troubleshooting

- `401 Unauthorized`: key is invalid, expired, or belongs to a different team
- `403 Forbidden`: network access issue or account restriction
- `429 Too Many Requests`: request rate or budget limit reached
