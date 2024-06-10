import { expect, test } from '#e2e/test-utils';

const test404 = test.extend({
	page: async ({ page }, use) => {
		await page.goto('/notfound');
		await expect(page.getByText('404')).toBeVisible();

		await page.goto('/Play/games');
		await page.waitForURL('/play/games');

		await use(page);
	},
});

test404('test404', () => {});
