# Change Log
Both the LoonAI Gateway and the LiteLLM project are actively evolving. We'll aim to capture major changes here. If you've got questions, please reach out to the [LoonAI Gateway support team](mailto:aigateway@umn.edu).

## Adding Bedrock Mantle Models (2026-07-09)
The LiteLLM project has added support for models hosted by AWS Bedrock Mantle. This includes GPT-5.4 and GPT-5.5 from OpenAI, allowing us to offer an alternative to Azure Foundry. This may be beneficial for some users, because the [mandatory default guardrails](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview) in Azure Foundry can be restrictive for some use cases.

At the moment, the Mantle-hosted models are only available via the Responses API. There is an open issue within the LiteLLM project to add support for the Completions API, which is expected to be resolved in the near future.