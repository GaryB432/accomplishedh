// import { expect, test } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   await page.goto("/human/12226");
// });

// test.describe("Human Route", () => {
//   test("shows Franz", async ({ page }) => {
//     await expect(page.locator("div.header > div.hn")).toHaveText("Franz Kafka");
//   });
//   test("sidebar checks out", async ({ page }) => {
//     const vp = page.locator(
//       "body > div > main > div.wrapper > div.header > div.hn",
//     );
//     await expect(vp).toHaveText("Franz Kafka");
//   });
//   test("sidebar more", async ({ page }) => {
//     const vp = page.locator("div.sidebar > section.featured-vp > section.head");
//     await expect(vp).toHaveText("Featured Today");
//   });
// });
