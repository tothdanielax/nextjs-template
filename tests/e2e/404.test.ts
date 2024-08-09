import { expect, test } from '@playwright/test';

test('404 page', async ({ page }) => {
  await page.goto('/notfound');
  await expect(page.getByText(/Page not found/)).toBeVisible();
});
