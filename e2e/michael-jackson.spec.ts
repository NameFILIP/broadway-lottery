import { test, expect } from "@playwright/test";

test("sign up for the lottery", async ({ page }) => {
  // await page.goto("https://lottery.broadwaydirect.com/show/mj-ny/");
  await page.goto("https://lottery.broadwaydirect.com/show/six-ny/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Broadway Direct Lottery/);

  const links = await page.getByRole("link", { name: /Enter/i }).all();
  // throw new Error(`Number: ${results.length}`);
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    await link.click();
    await page
      .getByText(
        "A link to these policies can be found in the entry confirmation email for your lottery submission"
      )
      .waitFor();

    await page.getByLabel("First Name").fill("Filip");
    // await page.getByLabel("Qty of Tickets Requested ").selectOption("2");

    break;
  }
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
