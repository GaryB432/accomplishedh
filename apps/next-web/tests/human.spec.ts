import { expect, test } from '@playwright/test';

test('human page has expected div', async ({ page }) => {
	await page.goto('/human');
	expect(await page.textContent('article > div')).toBe('//human route works');
});
