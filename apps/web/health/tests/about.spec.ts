import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/about");
});

test.describe("About Route", () => {
  test("should have build id", async ({ page }) => {
    await expect(page.locator(".BUILDNUMBER")).toContainText(/^202\d{5}/);
  });
});
