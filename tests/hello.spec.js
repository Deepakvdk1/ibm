import { test as base, expect } from "@playwright/test";

const test = base.extend<{ place: string }>({
  place: [process.env.PLACE || "Maharashtra", { option: true }],
});

test("wikipedia", async ({ page, place }) => {
  await page.goto("https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_population");
  let population = await page.locator(`//tr/td/a[@title='${place}']/../../descendant::i`).textContent();
  function populationFormat(population) {
    return population.replace(/,/g, '');
  }
  population = populationFormat(population);
});

test('basic', async ({ page }) => {
  expect(1 + 1).toBe(2);
});