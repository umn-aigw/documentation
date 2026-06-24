import { defineConfig } from "vitepress";

const REPO_URL = "https://github.com/umn-aigw/documentation";

export default defineConfig({
  lang: "en-US",
  title: "LoonAI Documentation",
  description: "Official docs for LoonAI tools at the University of Minnesota.",
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {
          find: /^@umn-latis\/cla-vue-template$/,
          replacement: "@umn-latis/cla-vue-template/dist/index.js"
        }
      ]
    }
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://umn-aigw.github.io/documentation"
  },
  themeConfig: {
    aside: false,
    logo: "/images/logo.png",
    siteTitle: "LoonAI Docs",
    nav: [
      { text: "Home", link: "/" },
      { text: "LoonAI Gateway", link: "/gateway/" },
      { text: "AI Hub", link: "https://ai.umn.edu" }
    ],
    sidebar: {
      "/gateway/": [
        {
          text: "LoonAI Gateway",
          items: [
            { text: "Overview", link: "/gateway/" },
            { text: "Getting Started", link: "/gateway/getting-started" },
            { text: "API Keys and Access", link: "/gateway/using-api-keys" },
            { text: "Models, Pricing, and Limits", link: "/gateway/models-and-costs" },
            { text: "Coding Tools Integration", link: "/gateway/coding-tools" },
            { text: "Support and Roadmap", link: "/gateway/support-and-roadmap" }
          ]
        }
      ]
    },
    socialLinks: [{ icon: "github", link: REPO_URL }],
    editLink: {
      pattern: `${REPO_URL}/edit/main/docs/:path`,
      text: "Edit this page on GitHub"
    },
    footer: {
      message: "LoonAI supports research, teaching, learning, and administration.",
      copyright: "Copyright 2026 Regents of the University of Minnesota"
    },
    search: {
      provider: "local"
    }
  }
});
