const { test, expect } = require('@playwright/test');
const { add, isEven } = require('../math');

test.describe('Unit Tests for math.js', () => {
  test('add(2, 3) should return 5', () => {
    expect(add(2, 3)).toBe(5);
    
  });

  test('isEven(4) should return true', () => {
    expect(isEven(4)).toBe(true);
  });

  test('isEven(5) should return false', () => {
    expect(isEven(5)).toBe(false);
  });
});
// npx playwright test testing/math.spec.js