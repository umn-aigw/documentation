<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { AppHeader, NavbarItem } from "@umn-latis/cla-vue-template";
import { withBase } from "vitepress";

const ThemeLayout = DefaultTheme.Layout;
</script>

<template>
  <div class="cla-template-wrapper vp-with-cla-header">
    <AppHeader menu-breakpoint="sm">
      <template #app-link>
        <a class="cla-docs-title" :href="withBase('/')">LoonAI Docs</a>
      </template>

      <template #navbar-links>
        <NavbarItem>
          <a :href="withBase('/')">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a :href="withBase('/gateway/')">LoonAI Gateway</a>
        </NavbarItem>
      </template>

      <template #navbar-links-right>
        <NavbarItem>
          <a href="https://ai.umn.edu" rel="noreferrer" target="_blank">AI Hub</a>
        </NavbarItem>
      </template>
    </AppHeader>

    <ThemeLayout />
  </div>
</template>
