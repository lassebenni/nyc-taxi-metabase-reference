// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60_000, // Metabase Container App cold-starts (~90s) after idle
  retries: 1,
  globalSetup: require.resolve("./global-setup.js"),
  use: {
    baseURL: process.env.METABASE_URL,
    viewport: { width: 1280, height: 900 },
    storageState: "storageState.json",
  },
});
