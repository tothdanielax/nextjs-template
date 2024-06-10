import { type Page, expect } from '@playwright/test';

/**
 * @param page - The page object from Playwright.
 */
export async function topLeftNavigateButtonTest(page: Page) {
	const withoutButton = page.getByText(/Play without account/);
	await expect(withoutButton).toBeVisible();
	await withoutButton.click();
	await page.waitForURL('/play/games');
}
