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
