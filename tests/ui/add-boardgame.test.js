const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('http://i-damyanov-exam-prep4.onrender.com/add-boardgame');
    const form = await page.$('div');
    expect(form).toBeTruthy();
  });
  