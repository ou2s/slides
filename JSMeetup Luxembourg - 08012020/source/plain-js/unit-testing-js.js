function sum(a, b) {
  const areParamsNotNumbers = isNaN(a) || isNaN(b);
  if (areParamsNotNumbers) {
    throw "Error: Invalid parameters!";
  }
  return a + b;
}

// HAPPY PATH
it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// SAD PATH
it('should throw an error when parameters are undefined', () => {
  expect(sum()).toThrow();
});

it('should throw an error when adding non numbers parameters', () => {
  expect(sum('string', {})).toThrow();
});