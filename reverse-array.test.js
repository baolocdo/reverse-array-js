const reverseArray = require('./reverse-array');

test('should returns [6, 5, 4]', () => {
  expect(reverseArray([4, 5, 6])).toEqual([6, 5, 4]);
});

test('should returns [1]', () => {
  expect(reverseArray([1])).toEqual([1]);
});

test('should returns []', () => {
  expect(reverseArray([])).toEqual([]);
});

test('should returns ["a", "b", "c", "d"]', () => {
  expect(reverseArray(["d", "c", "b", "a"])).toEqual(["a", "b", "c", "d"]);
});
