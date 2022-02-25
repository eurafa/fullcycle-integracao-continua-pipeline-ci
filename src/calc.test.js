const sum = require('./calc');

test("sum 2 + 2", () => {
    expect(sum(2, 2)).toBe(4);
});
