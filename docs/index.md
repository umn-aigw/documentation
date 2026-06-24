<script setup>
import { withBase } from 'vitepress'
</script>

<div class="loonai-hero">
    <img :src="withBase('/images/logo.png')" alt="LoonAI logo" class="loonai-logo" />
    <h1>LoonAI Documentation</h1>
    <p>
        LoonAI is the umbrella for University of Minnesota-administered tools
        powering AI for research, teaching, learning, and administration.
    </p>
    <p>
        For more information about university AI initiatives, visit the
        <a href="https://ai.umn.edu" target="_blank" rel="noreferrer">AI Hub at ai.umn.edu</a>.
    </p>
</div>

## Current Documentation

The first project currently documented in depth is the LoonAI Gateway.

<div class="gateway-callout">
    Explore the Gateway docs in the dedicated section:
    <a :href="withBase('/gateway/')">LoonAI Gateway Documentation</a>
</div>
