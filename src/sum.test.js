const sum = require('./sum');

test("sum 1 + 1", () => {
    expect(sum(1, 1)).toBe(2);
});
