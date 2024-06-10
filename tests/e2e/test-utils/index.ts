import { expect, test } from '@playwright/test';

/**
 * Options for the navbar and topbar test.
 */
type NavbarTestOptions = {
	/**
	 * Test navbar/topbar for authenticated users.
	 */
	auth?: {
		/**
		 * Test navbar/topbar for admin users.
		 */
		admin?: boolean;

		/**
		 * Test navbar/topbar for regular users.
		 */
		user?: boolean;
	};

	/**
	 * Test navbar/topbar for unauthenticated users.
	 */
	noAuth?: boolean;
};

/**
 * Test the navigation bar.
 * @param options - Options for the test.
 * @returns tests for the navbar.
 */
// eslint-disable-next-line unicorn/no-object-as-default-parameter
export const navbarTest = (
	options: NavbarTestOptions = {
		auth: {
			admin: true,
			user: true,
		},
		noAuth: true,
	},
) =>
	test.describe('navbar', () => {
		/**
		 * Common tests, that does not have to do anything with authentication.
		 */
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const commonTests = () => {
			test('should render correctly', async ({ page }) => {
				const nav = page.locator('nav');
				await expect(nav).toBeVisible();

				const games = nav.getByRole('link', { name: 'Games' });
				await expect(games).toBeVisible();
				// get closest link parent
				await expect(games).toHaveAttribute('href', '/play/games');

				const users = nav.getByRole('link', { name: 'Users' });
				await expect(users).toBeVisible();
				await expect(users).toHaveAttribute('href', '/play/users');

				const help = nav.getByRole('link', { name: 'Help' });
				await expect(help).toBeVisible();
				await expect(help).toHaveAttribute('href', '/play/help');
			});

			test('click games', async ({ page }) => {
				const games = page.locator('nav').getByRole('link', { name: 'Games' });
				await games.click();
				await page.waitForURL('/play/games');
				// eslint-disable-next-line sonarjs/no-duplicate-string
				await expect(games).toHaveAttribute('data-active', 'true');
			});

			test('click users', async ({ page }) => {
				const users = page.locator('nav').getByRole('link', { name: 'Users' });
				await users.click();
				await page.waitForURL('/play/users');
				// eslint-disable-next-line sonarjs/no-duplicate-string
				await expect(users).toHaveAttribute('data-active', 'true');
			});

			test('click help', async ({ page }) => {
				const help = page.locator('nav').getByRole('link', { name: 'Help' });
				await help.click();
				await page.waitForURL('/play/help');
				await expect(help).toHaveAttribute('data-active', 'true');
			});
		};

		if (options.noAuth) {
			test.describe('no auth', () => {
				test.use({ storageState: 'playwright/.auth/guest.json' });
				commonTests();

				test('does not have profile link', async ({ page }) => {
					const profile = page.locator('nav').getByRole('link', { name: 'Profile' });
					await expect(profile).toBeHidden();
				});
			});
		}

		if (options.auth) {
			test.describe('auth', () => {
				/**
				 * Common tests for authenticated users.
				 */
				// eslint-disable-next-line unicorn/consistent-function-scoping
				const authTests = () => {
					commonTests();
					test('has profile link', async ({ page }) => {
						const profile = page.locator('nav').getByRole('link', { name: 'Profile' });
						await expect(profile).toBeVisible();
						// eslint-disable-next-line sonarjs/no-duplicate-string
						await expect(profile).toHaveAttribute('href', '/play/profile');
					});

					test('click profile', async ({ page }) => {
						const profile = page.locator('nav').getByRole('link', { name: 'Profile' });
						await profile.click();
						await page.waitForURL('/play/profile');
						await expect(profile).toHaveAttribute('data-active', 'true');
					});
				};

				if (options.auth?.user) {
					test.describe('user', () => {
						test.use({ storageState: 'playwright/.auth/user.json' });
						authTests();
					});
				}

				if (options.auth?.admin) {
					test.describe('admin', () => {
						test.use({ storageState: 'playwright/.auth/admin.json' });
						authTests();

						test('has admin link', async ({ page }) => {
							const admin = page.locator('nav').getByRole('link', { name: 'Admin' });
							await expect(admin).toBeVisible();
							await expect(admin).toHaveAttribute('href', '/play/admin');
						});

						test('click admin', async ({ page }) => {
							const admin = page.locator('nav').getByRole('link', { name: 'Admin' });
							await admin.click();
							await page.waitForURL('/play/admin');
							await expect(admin).toHaveAttribute('data-active', 'true');
						});
					});
				}
			});
		}
	});

/**
 * Test the top bar.
 * @param options - Options for the test.
 * @returns tests for the top bar.
 */
// eslint-disable-next-line unicorn/no-object-as-default-parameter
export const topbarTest = (
	options: NavbarTestOptions = {
		auth: {
			admin: true,
			user: true,
		},
		noAuth: true,
	},
) =>
	test.describe('topbar', () => {
		// eslint-disable-next-line unicorn/consistent-function-scoping
		const commonTests = () => {
			test('should render correctly', async ({ page }) => {
				const topBar = page.getByTestId('top-bar');
				await expect(topBar).toBeVisible();

				// has dark mode button
				const darkMode = topBar.getByTestId('dark-mode');
				await expect(darkMode).toBeVisible();
			});

			test('should toggle dark mode', async ({ page }) => {
				const topBar = page.getByTestId('top-bar');
				const darkMode = topBar.getByTestId('dark-mode');
				await expect(page.locator('html')).toHaveAttribute('data-mantine-color-scheme', 'dark');
				await darkMode.click();
				await expect(page.locator('html')).toHaveAttribute('data-mantine-color-scheme', 'light');
			});
		};

		if (options.noAuth) {
			test.describe('no auth', () => {
				test.use({ storageState: 'playwright/.auth/guest.json' });
				commonTests();

				test('has create and sign in buttons', async ({ page }) => {
					const topBar = page.getByTestId('top-bar');
					// has create user button
					const createUser = topBar.getByTestId('create');
					await expect(createUser).toBeVisible();

					// has sign in button
					const signIn = topBar.getByTestId('signin');
					await expect(signIn).toBeVisible();
				});

				test('does not has user panel', async ({ page }) => {
					const topBar = page.getByTestId('top-bar');
					// eslint-disable-next-line sonarjs/no-duplicate-string
					const userPanel = topBar.getByTestId('user-panel');
					await expect(userPanel).toBeHidden();
				});
			});
		}

		if (options.auth) {
			test.describe('auth', () => {
				// eslint-disable-next-line unicorn/consistent-function-scoping
				const authTests = () => {
					commonTests();

					test('has user panel', async ({ page }) => {
						const topBar = page.getByTestId('top-bar');
						const userPanel = topBar.getByTestId('user-panel');
						await expect(userPanel).toBeVisible();

						// has username
						const username = userPanel.getByTestId('username');
						await expect(username).toBeVisible();

						// has icon next to username
						const icon = userPanel.getByTestId('avatar');
						await expect(icon).toBeVisible();
					});

					test('click user panel', async ({ page }) => {
						const topBar = page.getByTestId('top-bar');
						const userPanel = topBar.getByTestId('user-panel');
						await userPanel.click();
						// eslint-disable-next-line sonarjs/no-duplicate-string
						await expect(userPanel).toHaveAttribute('data-expanded', 'true');

						// has sign out button
						const signOut = page.getByTestId('sign-out');
						await expect(signOut).toBeVisible();

						// has profile button
						const profile = page.getByRole('menuitem', { name: 'Profile' });
						await expect(profile).toBeVisible();
					});

					test('click sign out', async ({ page }) => {
						const topBar = page.getByTestId('top-bar');
						const userPanel = topBar.getByTestId('user-panel');
						await userPanel.click();
						await expect(userPanel).toHaveAttribute('data-expanded', 'true');

						const url = page.url();

						await page.getByTestId('sign-out').click();
						await page.waitForURL(url);
					});

					test('click profile', async ({ page }) => {
						const topBar = page.getByTestId('top-bar');
						const userPanel = topBar.getByTestId('user-panel');
						await userPanel.click();
						await expect(userPanel).toHaveAttribute('data-expanded', 'true');

						await page.getByRole('menuitem', { name: 'Profile' }).click();
						await page.waitForURL('/play/profile');
					});
				};

				if (options.auth?.user) {
					test.describe('user', () => {
						test.use({ storageState: 'playwright/.auth/user.json' });
						authTests();
					});
				}

				if (options.auth?.admin) {
					test.describe('admin', () => {
						test.use({ storageState: 'playwright/.auth/admin.json' });
						authTests();
					});
				}
			});
		}
	});

export * from '@playwright/test';
