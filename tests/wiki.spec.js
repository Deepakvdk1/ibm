import { test } from "@playwright/test";

test("wikipedia", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Main_Page");
  await page.getByTitle("Search Wikipedia [alt-shift-f]").fill("world population");
  await page.screenshot({ path: "example.png" });
});
