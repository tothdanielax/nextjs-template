import { expect, test } from '@playwright/test';

import { topLeftNavigateButtonTest } from './auth-utils';

const REDIRECT_URL = '/play/games';

test.beforeEach(async ({ page }) => {
	await page.goto('/auth/create');
});

test.describe('no auth', () => {
	test.use({ storageState: 'playwright/.auth/guest.json' });

	test('has title', async ({ page }) => {
		await expect(page).toHaveTitle('Create User - Tailwind CSS');
	});

	test('top left nav', async ({ page }) => topLeftNavigateButtonTest(page));

	test('create user', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('TestManCreate123');

		// eslint-disable-next-line  sonarjs/no-duplicate-string
		const password = page.getByLabel('Password *', { exact: true });
		await expect(password).toBeVisible();
		await password.fill('TestPassword1');

		// eslint-disable-next-line  sonarjs/no-duplicate-string
		const confirmPassword = page.getByLabel('Confirm Password');
		await expect(confirmPassword).toBeVisible();
		await confirmPassword.fill('TestPassword1');

		const bio = page.getByLabel('Bio');
		await expect(bio).toBeVisible();
		await bio.fill('testbio');

		const create = page.getByRole('button', { name: 'Create' });
		await expect(create).toBeVisible();
		await create.click();

		await page.waitForURL(REDIRECT_URL);
	});

	test('invalid input should not redirect', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('testtesttestTestManCreate123');

		const password = page.getByLabel('Password *', { exact: true });
		await expect(password).toBeVisible();
		await password.fill('TestPassword1');

		const confirmPassword = page.getByLabel('Confirm Password');
		await expect(confirmPassword).toBeVisible();
		await confirmPassword.fill('TestPassword2');

		const bio = page.getByLabel('Bio');
		await expect(bio).toBeVisible();
		await bio.fill('testbio');

		const create = page.getByRole('button', { name: 'Create' });
		await expect(create).toBeVisible();
		await create.click();

		expect(page.url()).not.toBe(REDIRECT_URL);
	});

	test('invalid input should show error on fill immediately', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('AddsdqwdDdsad324');

		const password = page.getByLabel('Password *', { exact: true });
		await expect(password).toBeVisible();
		await password.fill('TestPassword1');

		const confirmPassword = page.getByLabel('Confirm Password');
		await expect(confirmPassword).toBeVisible();
		await confirmPassword.fill('TestPassword2');

		const bio = page.getByLabel('Bio');
		await expect(bio).toBeVisible();
		await bio.fill('testbio');

		const create = page.getByRole('button', { name: 'Create' });
		await expect(create).toBeVisible();
		await create.click();

		const error = page.getByText('Passwords do not match');
		await expect(error).toBeVisible();
	});

	test('navigate to /auth/signin', async ({ page }) => {
		const signin = page.getByText('Sign in instead');
		await expect(signin).toBeVisible();
		await signin.click();

		await page.waitForURL('/auth/signin?username=&password=');
	});

	test('navigate to /auth/signin after input, show in query', async ({ page }) => {
		const username = page.getByLabel('Username');
		await expect(username).toBeVisible();
		await username.fill('testuser');

		const password = page.getByLabel('Password *', { exact: true });
		await expect(password).toBeVisible();
		await password.fill('testpassword');

		const signin = page.getByText('Sign in instead');
		await expect(signin).toBeVisible();
		await signin.click();

		await page.waitForURL('/auth/signin?username=testuser&password=testpassword');
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
