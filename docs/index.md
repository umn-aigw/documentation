<div class="gateway-hero">
	<h1>AI Gateway</h1>
	<p>
		Managed access to leading AI models for University of Minnesota researchers, faculty, staff, and students through a unified API and web interface.
	</p>
	<div class="gateway-actions">
		<a class="gateway-btn gateway-btn-primary" href="https://tdx.umn.edu/TDClient/31/Portal/Requests/Service/710/AI-Gateway-Request/Request" target="_blank" rel="noopener noreferrer">
			Request Access
		</a>
		<a class="gateway-btn gateway-btn-secondary" href="https://api.aigateway.umn.edu/ui/" target="_blank" rel="noopener noreferrer">
			Open Gateway UI
		</a>
		<a class="gateway-btn gateway-btn-secondary" href="/gateway/getting-started">
			Read the Docs
		</a>
	</div>
</div>

<div class="gateway-quick-connect">
	<p><strong>Quick Connect for Existing Users &amp; Developers</strong></p>
	<ul>
		<li><strong>Web UI (Manage Virtual Keys &amp; Spend):</strong> <a href="https://api.aigateway.umn.edu/ui/" target="_blank" rel="noopener noreferrer">https://api.aigateway.umn.edu/ui/</a></li>
		<li><strong>API Base Endpoint (OpenAI-Compatible):</strong> <code>https://api.aigateway.umn.edu</code></li>
		<li><strong>New Users:</strong> Have an active <strong>EFS chart string (<code>Fund-DeptID-Program</code>)</strong> ready before submitting the <a href="https://tdx.umn.edu/TDClient/31/Portal/Requests/Service/710/AI-Gateway-Request/Request" target="_blank" rel="noopener noreferrer">TDX Access Request Form</a> to establish your monthly budget guardrails.</li>
	</ul>
</div>

> [!IMPORTANT]
> **Approved Data & Current Scope**
> * **Permitted Data:** Approved only for **Public** and **Private-Restricted** data. Protected Health Information (**PHI/HIPAA**) and **Private Highly Restricted** data are not supported.
> * **Current Exclusions:** Model Context Protocol (**MCP**) servers and **Vector Databases (RAG)** are excluded from this phase.
> * **Service Availability:** During our pilot and early General Availability rollout, immediate downtime may occur if we must apply zero-day security updates.

## What You Get

- **Unified Multi-Model API & Web UI:** Connect via one OpenAI-compatible endpoint (`https://api.aigateway.umn.edu`) or test prompts and manage keys in the browser.
- **Team-Based Virtual Keys & Budget Controls:** Create scoped virtual keys with monthly spending limits to prevent unexpected charges.
- **Chargeback Billing with Usage Transparency:** Automated monthly billing tied to your team's EFS chart string.
- **Fast Onboarding:** Streamlined access for individuals, research labs, departments, and courses.

## Platform Overview

The University's AI Gateway is powered by [LiteLLM](https://www.litellm.ai), which routes requests to multiple approved model providers behind a consistent API layer.

This design gives teams one integration pattern while preserving flexibility to choose models based on price, speed, and capabilities.

## Documentation Map

- [Getting Started](/gateway/getting-started.md): onboarding requirements, EFS setup, and account activation
- [API Keys and Access](/gateway/using-api-keys.md): creating virtual keys, team roles, and usage patterns
- [Models, Pricing, and Limits](/gateway/models-and-costs.md): selecting approved models and controlling spend
- [Coding Tools Integration](/gateway/coding-tools.md): connecting coding assistants and SDKs to `https://api.aigateway.umn.edu`
- [Courses](/gateway/courses.md): course-based access for classes and students
- [Privacy and Data Collection](/gateway/privacy.md): data classifications, guardrails, and retention practices
- [Support and Roadmap](/gateway/support-and-roadmap.md): support channels, SLA expectations, and upcoming features
- [Change Log](/gateway/changelog.md): notable platform and model updates

> [!WARNING]
> Keep API keys private. Do not commit keys to Git repositories or share them in chats, tickets, or screenshots.
