import { defineConfig, devices } from "@playwright/test";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  testDir: "testGlobal",
  fullyParallel: true,
  globalTimeout: 30_000,
  use: {
    headless: false,
    trace: "on",
  },
  reporter: "json",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
