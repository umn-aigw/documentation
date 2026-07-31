import { defineConfig } from "vitepress";

const REPO_URL = "https://github.com/umn-aigw/documentation";

export default defineConfig({
  lang: "en-US",
  title: "University of Minnesota AI Gateway Documentation",
  description: "Official docs for the AI Gateway tools at the University of Minnesota.",
  base: "/",
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
    hostname: "https://aigateway.umn.edu"
  },
  themeConfig: {
    aside: false,
    logo: "/images/logo.png",
    siteTitle: "AI Gateway Docs",
    nav: [
      { text: "Home", link: "/" },
      { text: "AI Gateway", link: "/gateway/" },
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
            { text: "Support and Roadmap", link: "/gateway/support-and-roadmap" },
            { text: "Privacy and Data Collection", link: "/gateway/privacy" },
            { text: "Course Access", link: "/gateway/courses" },
            { text: "Change Log", link: "/gateway/changelog" }
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
      message: "The University of Minnesota's AI Gateway supports research, teaching, learning, and administration.",
      copyright: "Copyright 2026 Regents of the University of Minnesota"
    },
    search: {
      provider: "local"
    }
  }
});
