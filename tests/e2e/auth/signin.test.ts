import { expect, test } from '@playwright/test';

import { topLeftNavigateButtonTest } from './auth-utils';

const REDIRECT_URL = '/play/games';

test.beforeEach(async ({ page }) => {
	await page.goto('/auth/signin');
});

test.describe('no auth', () => {
	test.use({ storageState: 'playwright/.auth/guest.json' });

	test('has title', async ({ page }) => {
		await expect(page).toHaveTitle('Sign In - Tailwind CSS');
	});

	test('navigate /games on left top click', async ({ page }) => topLeftNavigateButtonTest(page));

	test('sign in user', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('user');

		const password = page.getByLabel('Password');
		await expect(password).toBeVisible();
		await password.fill('UserPassword1');

		const signin = page.getByRole('button', { exact: true, name: 'Sign in' });
		await expect(signin).toBeVisible();
		await signin.click();

		await page.waitForURL(REDIRECT_URL);
	});

	test('sign in admin', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('admin');

		const password = page.getByLabel('Password');
		await expect(password).toBeVisible();
		await password.fill('AdminPassword1');

		const create = page.getByRole('button', { exact: true, name: 'Sign in' });
		await expect(create).toBeVisible();
		await create.click();

		await page.waitForURL(REDIRECT_URL);
	});

	test('navigates to /auth/create on Create user click', async ({ page }) => {
		const create = page.getByText('Create instead');
		await expect(create).toBeVisible();
		await create.click();

		await page.waitForURL('/auth/create?username=&password=');
	});

	test('invalid input should not redirect', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('404User');

		const password = page.getByLabel('Password');
		await expect(password).toBeVisible();
		await password.fill('UserPassword1');

		const create = page.getByRole('button', { exact: true, name: 'Sign in' });
		await expect(create).toBeVisible();
		await create.click();

		expect(page.url()).not.toBe(REDIRECT_URL);
	});

	test('redirect to create with query if input was set', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('404User');

		const password = page.getByLabel('Password');
		await expect(password).toBeVisible();
		await password.fill('UserPassword1');

		const create = page.getByText('Create instead');
		await expect(create).toBeVisible();
		await create.click();

		await page.waitForURL('/auth/create?username=404User&password=UserPassword1');
	});

	test('invalid input should show error on fill immediately', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('');

		page.locator('input#username[required]:invalid');
	});
});

test.describe('auth', () => {
	test.describe('user', () => {
		test.use({ storageState: 'playwright/.auth/user.json' });
		test('redirect to /play/games if authenticated', async ({ page }) => {
			await page.waitForURL(REDIRECT_URL);
		});
	});

	test.describe('admin', () => {
		test.use({ storageState: 'playwright/.auth/admin.json' });
		test('redirect to /play/games if authenticated', async ({ page }) => {
			await page.waitForURL(REDIRECT_URL);
		});
	});
});
