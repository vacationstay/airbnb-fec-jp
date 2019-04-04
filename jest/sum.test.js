const sum = require('./sum.js');

test('add 1 + 2 to return 3', () => {
  expect(sum(1, 2)).toBe(3);
})
;