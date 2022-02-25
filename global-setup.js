// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.hired.com/login');
    await page.click('text=Sign In');
    await page.fill('input[name="user[email]"]', 'delwinh13@gmail.com');
    await page.fill('input[name="user[password]"]', 'Angela07');
    await page.click('#sign_in');
    await page.context().storageState({ path: 'netflix.json' });
    await browser.close();
}