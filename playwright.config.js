// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60_000, // Metabase Container App cold-starts (~90s) after idle
  retries: 1,
  globalSetup: require.resolve("./global-setup.js"),
  reporter: [["list"], ["@argos-ci/playwright/reporter"]],
  use: {
    baseURL: process.env.METABASE_URL,
    viewport: { width: 1280, height: 900 },
    storageState: "storageState.json",
    // Metabase ships a strict Content-Security-Policy that blocks the
    // inline <script> Argos injects to read viewport/color-scheme info.
    // This only relaxes CSP inside the throwaway CI browser context, not
    // the real app or any student session.
    bypassCSP: true,
  },
});
