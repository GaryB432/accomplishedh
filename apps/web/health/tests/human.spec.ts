import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/human/12226");
});

test.describe("Human Route", () => {
  test("shows Franz", async ({ page }) => {
    await expect(
      page.locator("body > div > main > div.wrapper > div.header > h2"),
    ).toHaveText("Franz Kafka");
  });
});
