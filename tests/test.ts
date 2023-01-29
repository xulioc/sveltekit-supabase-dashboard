import { expect, test } from '@playwright/test';

test('Homepage has "Dashboard" title and Sign-In', async ({ page }) => {
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle('Dashboard');

	// create a locator
	const getStarted = page.getByText('Sign In');

	// Expect an attribute "to be strictly equal" to the value.
	await expect(getStarted).toHaveAttribute('href', '/auth');

	// // Click the get started link.
	// await getStarted.click();

	// // Expects the URL to contain intro.
	// await expect(page).toHaveURL(/.*intro/);
});
