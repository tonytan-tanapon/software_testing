const { test, expect } = require('@playwright/test');
const { isValidUser } = require('../auth');

test('returns true for valid credentials', () => {
  expect(isValidUser('admin', 'admin')).toBe(true);
});

test('returns false for wrong password', () => {
  expect(isValidUser('admin', 'wrong')).toBe(false);
});

test('returns false for empty fields', () => {
  expect(isValidUser('', '')).toBe(false);
});
// npx playwright test testing/unit.spec.js