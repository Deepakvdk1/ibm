import { test } from "@playwright/test";


test("wikipedia", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_population");
  let population = await page.locator(`//tr/td/a[@title='Maharashtra']/../../descendant::i`).textContent();
  function populationFormat(population) {
    return population.replace(/,/g, '');
  }
  console.log(populationFormat(population))
});
