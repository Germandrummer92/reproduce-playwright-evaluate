import {test,} from "@playwright/test";

test.describe("global timeout", () => {
    test("should be able to save a trace", async ({page}) => {
        await page.goto("https://google.com");

        const locator = page.locator("[data-id='thisdoesntexist']");
        await locator.evaluate(
            () => {
                console.log("something");
            },
            {timeout: 5_000},
        );
    })
})
