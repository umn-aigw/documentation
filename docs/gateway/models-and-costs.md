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

| Model Name | Capabilities | Approved Data Classification |
| :--- | :--- | :--- |
| deepseek-v4-flash | chat, Function Calling | Public, Private-Restricted |
| deepseek-v4-pro | chat, Function Calling | Public, Private-Restricted |
| gemini-3-pro-image-preview | image_generation, Vision, Web Search | Public, Private-Restricted |
| gemini-3.1-flash-image-preview | image_generation, Vision, Web Search | Public, Private-Restricted |
| gemini-3.1-flash-lite | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gemini-3.1-pro-preview | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gemini-3.5-flash | chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.4 | chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.4-mini | chat | Public, Private-Restricted |
| gpt-5.4-nano | chat | Public, Private-Restricted |
| gpt-5.4-pro | responses, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.5 | chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.6-luna | chat | Public, Private-Restricted |
| gpt-5.6-sol | chat | Public, Private-Restricted |
| gpt-5.6-terra | chat | Public, Private-Restricted |
| gpt-image-2 | image_generation | Public, Private-Restricted |
| kimi-k2.6 | chat, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| llama4-maverick-17b-instruct-v1:0 | chat, Function Calling | Public, Private-Restricted |
| llama4-scout-17b-instruct-v1:0 | chat, Function Calling | Public, Private-Restricted |
| mantle-gpt-5.4 | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| mantle-gpt-5.5 | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| mantle-gpt-5.6-luna | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| mantle-gpt-5.6-sol | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| mantle-gpt-5.6-terra | responses, Vision, Reasoning, Function Calling | Public, Private-Restricted |
| mistral-medium-3-5 | chat | Public, Private-Restricted |
| mistral-ocr-4-0 | ocr | Public, Private-Restricted |
| zai.glm-4.7 | chat, Reasoning, Function Calling | Public, Private-Restricted |
| zai.glm-4.7-flash | chat, Reasoning, Function Calling | Public, Private-Restricted |
| zai.glm-5 | chat, Reasoning, Function Calling | Public, Private-Restricted |

::: info A note on Anthropic models
Adding support for Anthropic models is the number one priority for the LoonAI Gateway team, and university IT leadership. We are actively working with Anthropic to get their models available through the gateway. We will provide updates on progress and availability as soon as we have them.
:::

::: info A note on Bedrock Mantle models
The OpenAI models hosted via AWS Bedrock Mantle currently only support the Responses API. The LiteLLM project is actively working to add support for the Completions API, and we expect that to be available in the near future.
:::
