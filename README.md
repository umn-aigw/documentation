# LoonAI Gateway

Welcome to the LoonAI gateway. This platform provides University of Minnesota researchers, faculty, staff and students access to AI models via API keys. 

## Overview ##

The AI gateway is powered by [LiteLLM](https://www.litellm.ai), and provides access to models from a number of foundation labs. The AI gateway operates on a chargeback model, meaning users are responsible for their incurred per-token costs. The platform provides granular controls over budgeting and request rates. 

## Getting Started ##

To get started, contanct your local CESI requester to initiate an account. During the setup process, you'll be asked for an EFS string and a budget cap. We recommend starting with a relatively low cap until you're confidient in your usage patterns. It's easy to have a nasty surprise! 

Access can be granted to individuals, labs, units, or classes. When onboarding a class, be sure to provide any cross-listing information. 

## Accessing the AI Gateway ##
After your account is created, you can access the AI gateway at <URL>. The AI gateway is only available to users on campus, or users connected to the VPN. If this creates a limitation for you, pelase let us know! 

## Using the AI Gateway ##
The AI gateway provides an OpenAI compatible API which is accessed used API keys. This makes it easy to leverage the gateway across a variety of programmming languages and frameworks. There are numerous [OpenAI-compatible libraries available](https://developers.openai.com/api/docs/libraries). 

To use the gateway, you'll need to create at least one API key. The key is what connects your AI usage to your specific team. If you're on multiple teams, you'll have multiple keys. Keys determine how usage is accounted and billed, so be sure you're using the appropriate key for your project.

### Creating a Key ### 
To create a key, go to the "Virtual Keys" tab and click "Create a new key". You can leave the "organization" field blank, but you must select a team. Specify a key name to make it easier for you to keep track of your keys. All of the other settings can left at their defaults, though you can explore [the documentation](https://docs.litellm.ai/docs/proxy/virtual_keys) to learn more about possible configuration options. 

Click "Create Key" and then be sure to copy the key that is displayed. You won't be able to access it again in the future. 

### Using Your Key ###
When using your key with an OpenAI compatible library, you'll need to specify the endpoint, the key and the model. You can use any model from the model catalog in this way - not just OpenAI models. However, note that not all models have the same capabilities. For example, some models don't support image generation, or tool use. You can visit the AI Hub in the gateway to understand which capabilities are support for individual models. 

*Important:* keep your key secure. Don't check it into your version control (like Git), and don't share it with others. Shared keys can create both financial and legal risks.

Below is an annotated example of how to use a key.
```
import openai
client = openai.OpenAI(
    api_key="your_api_key", 
    base_url="https://gateway.ai.umn.edu" # LiteLLM Proxy is OpenAI compatible, Read More: https://docs.litellm.ai/docs/proxy/user_keys
)

response = client.chat.completions.create(
    model="gpt-3.5-turbo", # model to send to the proxy
    messages = [
        {
            "role": "user",
            "content": "this is a test request, write a short poem"
        }
    ]
)

print(response)
```



## Model Catalog ##


## Legacy Models ##
In general, users maintain access to the current version of each model, as well as one previous version. Legacy model availability depends on the specific model and provider. To request access to legacy models, contaact us. 


## New Models ##

Our goal is to provide timely access to new models as they're released by foundation labs. Generally this happens within 24-48 hours after their release. In some circumstances, this timeline may be longer. 

## AI Coding Assistants ##
You can use keys provided by the AI Gateway with many popular AI coding tools, including OpenAI Codex and the Gemini CLI. [LiteLLM maintains howto documents](https://docs.litellm.ai/docs/ai_tools) to walk you through the setup process.

For more users at the University of Minnesota, [GitHub Copilot](https://github-docs.devex.oit.umn.edu/github-copilot/) is the preferring coding solution. The pricing model and pooled usage structure means that it is often substantially less expensive than the cost-per-token model available through the AI Gateway. It also provides access to a wide variety of popular models.

## Other Features of the Gateway ##
LiteLLM provides a number of advanced features for managing Agents, Skills, MCPs and more. Exploration of these functions has been out of scope for our initial launch. If you're interested in working with us to explore these features, get in touch. 


## Roadmap ##




## Getting Involved ##
* Contact Us
* Join our Slack team
