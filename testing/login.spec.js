const { test, expect } = require('@playwright/test');

// Define test cases
const testCases = [
  { username: 'admin', password: 'admin', expected: 'Login successful' },
  { username: 'admin', password: 'wrong', expected: 'Invalid credentials' },
  { username: '', password: '', expected: 'Invalid credentials' },
  { username: 'wrong', password: 'admin', expected: 'Invalid credentials' },
];

test.describe('Login Integration Tests', () => {
  for (const { username, password, expected } of testCases) {
    test(`Login with username="${username}" and password="${password}"`, async ({ page }) => {
      // Open the HTML page served from local server (e.g., Live Server)
      await page.goto('http://localhost:3000/test.html');

      // Fill in the username and password
      await page.fill('#username', username);
      await page.fill('#password', password);

      // Call the submitLogin() function inside the page and WAIT for it
      await page.evaluate(async () => {
        await submitLogin();
      });

      // Expect the result text to match expected
      await expect(page.locator('#message')).toHaveText(expected, { timeout: 5000 });
    });
  }
});
