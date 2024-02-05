const sumMul = require('./index');

test('sum of all multiples', () => {
  expect(sumMul(2, 9)).toBe(20);
});

