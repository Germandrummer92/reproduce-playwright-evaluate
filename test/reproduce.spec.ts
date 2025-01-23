import { test } from "@playwright/test";

test.describe("evaluate", () => {
  test("evaluate", async ({ page }) => {
    await page.goto("https://google.com");
    await page.waitForLoadState();

    const locator = page.locator("[data-id='thisdoesntexist']");

    await locator.evaluate(
      () => {
        console.log("something");
      },
      { timeout: 5_000 },
    );
  });
});
