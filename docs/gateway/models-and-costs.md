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
| azure_ai/kimi-k2.6 | Chat | Public, Private-Restricted |
| deepseek-v4-flash | Chat, Function Calling | Public, Private-Restricted |
| deepseek-v4-pro | Chat, Function Calling | Public, Private-Restricted |
| gemini-3.1-flash-lite | Chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gemini-3.1-pro-preview | Chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gemini-3.5-flash | Chat, Vision, Web Search, Url Context, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.3-codex | Responses, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.4-mini | Chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| gpt-5.5 | Chat, Vision, Web Search, Reasoning, Function Calling | Public, Private-Restricted |
| Llama-4-Maverick-17B-128E-Instruct-FP8 | Chat | Public, Private-Restricted |
| Llama-4-Scout-17B-16E-Instruct | Chat | Public, Private-Restricted |
| zai.glm-4.7 | Chat, Reasoning, Function Calling | Public, Private-Restricted |
| zai.glm-4.7-flash | Chat, Reasoning, Function Calling | Public, Private-Restricted |
| zai.glm-5 | Chat, Reasoning, Function Calling | Public, Private-Restricted |

!!! info "A note on Anthropic models"
	Adding support for Anthropic models is the number one priority for the LoonAI Gateway team, and university IT leadership. We are actively working with Anthropic to get their models available through the gateway. We will provide updates on progress and availability as soon as we have them.