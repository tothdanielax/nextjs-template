import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

/**
 *
 */
async function testRedirectToPlay() {
	test('redirect to /play/games', async ({ page }) => page.waitForURL('/play/games'));
}

test.describe('no auth', () => {
	test.use({ storageState: 'playwright/.auth/guest.json' });

	test('general', async ({ page }) => {
		await expect(page).toHaveTitle('Home - Tailwind CSS');
		await expect(page.getByText('Welcome to this Tailwind CSS game!')).toBeVisible();
	});

	test('play without account button', async ({ page }) => {
		const playWithoutAccount = page.getByText('Play without account', { exact: true });
		await expect(playWithoutAccount).toBeVisible();

		await playWithoutAccount.click();

		await page.waitForURL('/play/games');
	});

	test('play authenticated button', async ({ page }) => {
		const playAuth = page.getByText('Play with account', { exact: true });
		expect(playAuth).toBeDefined();
		await expect(playAuth).toBeVisible();

		await playAuth.click();
		await page.waitForURL('/auth/create');
	});
});

test.describe('auth', () => {
	test.describe('user', () => {
		test.use({ storageState: 'playwright/.auth/user.json' });
		void testRedirectToPlay();
	});
	test.describe('admin', () => {
		test.use({ storageState: 'playwright/.auth/admin.json' });
		void testRedirectToPlay();
	});
});
