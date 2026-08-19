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

| Model Name | Capabilities | Approved Data Classification | Input Cost (per 1M tokens) | Output Cost (per 1M tokens) |
| --- | --- | --- | --- | --- |
| azure-tts | audio_speech | Public, Private-Restricted | N/A | N/A |
| deepseek-v4-flash | chat, Function Calling | Public, Private-Restricted | $0.1900 | $0.5100 |
| deepseek-v4-pro | chat, Function Calling | Public, Private-Restricted | $1.74 | $3.48 |
| gemini-3-pro-image-preview | image_generation, Vision, Web Search | Public, Private-Restricted | $2.00 | $12.00 |
| gemini-3.1-flash-image-preview | image_generation, Vision, Web Search | Public, Private-Restricted | $0.5000 | $3.00 |
| gemini-3.1-flash-lite | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $0.2500 | $1.50 |
| gemini-3.1-pro-preview | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $2.00 | $12.00 |
| gemini-3.5-flash | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $1.50 | $9.00 |
| gemini-3.5-flash-lite | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $0.3000 | $2.50 |
| gemini-3.6-flash | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $0.7500 | $3.75 |
| gemini-3.7-flash | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted | $0.7500 | $3.75 |
| gpt-5.4 | chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted | $2.50 | $15.00 |
| gpt-5.4-mini | chat | Public, Private-Restricted | $0.7500 | $4.50 |
| gpt-5.4-nano | chat | Public, Private-Restricted | $0.2000 | $1.25 |
| gpt-5.4-pro | responses, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted | $30.00 | $180.00 |
| gpt-5.5 | chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted | $5.00 | $30.00 |
| gpt-5.6-luna | chat | Public, Private-Restricted | $0.2000 | $1.20 |
| gpt-5.6-sol | chat | Public, Private-Restricted | $5.00 | $30.00 |
| gpt-5.6-terra | chat | Public, Private-Restricted | $2.00 | $12.00 |
| gpt-image-2 | image_generation | Public, Private-Restricted | $5.00 | $10.00 |
| kimi-k2.6 | chat, Vision, Reasoning, Function Calling | Public, Private-Restricted | $0.9500 | $4.00 |
| llama4-maverick-17b-instruct-v1:0 | chat, Function Calling | Public, Private-Restricted | $0.2400 | $0.9700 |
| llama4-scout-17b-instruct-v1:0 | chat, Function Calling | Public, Private-Restricted | $0.1700 | $0.6600 |
| mantle-gpt-5.4 | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted | $2.75 | $16.50 |
| mantle-gpt-5.5 | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted | $5.50 | $33.00 |
| mantle-gpt-5.6-luna | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted | $1.10 | $6.60 |
| mantle-gpt-5.6-sol | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted | $5.50 | $33.00 |
| mantle-gpt-5.6-terra | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted | $2.75 | $16.50 |
| mistral-medium-3-5 | chat | Public, Private-Restricted | $1.50 | $7.50 |
| mistral-ocr-4-0 | ocr | Public, Private-Restricted | N/A | N/A |
| text-embedding-3-large | embedding | Public, Private-Restricted | $0.1300 | N/A |
| zai.glm-4.7 | chat, Reasoning, Function Calling | Public, Private-Restricted | $0.6000 | $2.20 |
| zai.glm-4.7-flash | chat, Reasoning, Function Calling | Public, Private-Restricted | $0.0700 | $0.4000 |
| zai.glm-5 | chat, Reasoning, Function Calling | Public, Private-Restricted | $1.00 | $3.20 |

::: info A note on Anthropic models
Adding support for Anthropic models is the number one priority for the AI Gateway team, and university IT leadership. We are actively working with Anthropic to get their models available through the gateway. We will provide updates on progress and availability as soon as we have them.
:::

::: info A note on Bedrock Mantle models
The OpenAI models hosted via AWS Bedrock Mantle currently only support the Responses API. The LiteLLM project is actively working to add support for the Completions API, and we expect that to be available in the near future.
:::
