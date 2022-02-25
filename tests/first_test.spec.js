const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

// test.only('test oops', async ({ page}) => {
//     await page.goto('http://www.uitestingplayground.com/scrollbars');
//     await page.click('#hiddingButton')
// });

test('test hiding scrollbar', async ({ page, context}) => {
    // await context.tracing.start({ screenshots: true, snapshots: true });
    await page.goto('/scrollbars');
    await page.click('#hidingButton')
    // await context.tracing.stop({ path: 'trace.zip' });
});

test.use({ storageState: 'netflix.json' });
test.only('netflix auth', async ({ page }) => {
    await page.goto('https://hired.com/ivrs');
    const locator = page.locator('.logo-signed-in');
    await expect(locator).toBeVisible();
    // const text = await page.innerText('.logo-signed-in');
    // expect(text).toContain("Hired");
});

