# Change Log
Both the AI Gateway and the LiteLLM project are actively evolving. We'll aim to capture major changes here. If you've got questions, please reach out to the [AI Gateway support team](mailto:aigateway@umn.edu).

## Modifying Branding To Reflect a Platform-Neutral Name (2026-07-31)
Informed by University Marketing and Communications, this change provides a clearer, platform-neutral name for the service as the AI Gateway moves beyond its initial pilot identity. The Gateway is intended to provide centralized, secure, and governed access to AI models across the University, so the new address better reflects the service's broader purpose.

The previous name LoonAI will be retired in favor of AI Gateway. References to *.loonai.umn.edu and LoonAI will now be *.aigateway.umn.edu and AI Gateway, respectively. 

## Adding Bedrock Mantle Models (2026-07-09)
The LiteLLM project has added support for models hosted by AWS Bedrock Mantle. This includes GPT-5.4 and GPT-5.5 from OpenAI, allowing us to offer an alternative to Azure Foundry. This may be beneficial for some users, because the [mandatory default guardrails](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview) in Azure Foundry can be restrictive for some use cases.

At the moment, the Mantle-hosted models are only available via the Responses API. There is an open issue within the LiteLLM project to add support for the Completions API, which is expected to be resolved in the near future.

