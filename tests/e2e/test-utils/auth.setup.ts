import { type Page, expect, test as setup } from '@playwright/test';

const adminAuthFile = 'playwright/.auth/admin.json';
const userAuthFile = 'playwright/.auth/user.json';

setup.beforeEach(async ({ page }) => {
	await page.goto('/auth/signin');
});

/**
 * Logs in with the given username and password and stores the authentication state as json.
 * @param page - The page object from Playwright.
 * @param username - The username to login with.
 * @param password - The password to login with.
 * @param storagePath - The path to store the authentication state.
 */
async function login(page: Page, username: string, password: string, storagePath: string) {
	await page.getByLabel('Username').fill(username);
	await page.getByLabel('Password').fill(password);
	await page.getByRole('button', { name: 'Sign in' }).click();
	await page.waitForURL('/play/games');

	await expect(page.getByRole('link', {name: 'Games'})).toBeVisible();

	await page.context().storageState({ path: storagePath });
}

setup('authenticate as admin', async ({ page }) => {
	await login(page, 'admin', 'AdminPassword1', adminAuthFile);
});

setup('authenticate as user', async ({ page }) => {
	await login(page, 'user', 'UserPassword1', userAuthFile);
});

setup('setup guest', async ({ page }) => {
	await page.context().storageState({ path: 'playwright/.auth/guest.json' });
});
