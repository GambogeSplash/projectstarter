import { test, expect } from '@playwright/test';

test('homepage has title and main elements', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Create Next App/);

    // Check for signature interaction
    await expect(page.getByText('Signature Interaction')).toBeVisible();

    // Check for design system elements
    await expect(page.getByText('Design System Starter')).toBeVisible();
});
