const { test, expect, request } = require('@playwright/test');

// Test cases array
const testCases = [
  { username: 'admin', password: 'admin', expected: 'Login successful' },
  { username: 'admin', password: 'wrong', expected: 'Invalid credentials' },
  { username: '', password: '', expected: 'Invalid credentials' },
  { username: 'wrong', password: 'admin', expected: 'Invalid credentials' },
];

test.describe('Login API Functional Tests (Dynamic)', () => {
  let apiContext;

  // Create API context before all tests
  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'http://localhost:3000',
    });
  });

  // Loop through each test case
  for (const { username, password, expected } of testCases) {
    test(`Login with username="${username}" and password="${password}"`, async () => {
      const response = await apiContext.post('/api/login', {
        data: { username, password },
      });

      expect(response.status()).toBe(200);

      const json = await response.json();
      expect(json).toEqual({ message: expected });
    });
  }
});

// npx playwright test testing/api.spec.js