const { sum, subtract, divide, multiply } = require('./calc');

test("sum 2 + 2", () => {
    expect(sum(2, 2)).toBe(4);
});

test("subtract 2 - 2", () => {
    expect(subtract(2, 2)).toBe(0);
});

test("divide 2 / 2", () => {
    expect(divide(2, 2)).toBe(1);
});

test("multiply 2 * 2", () => {
    expect(multiply(2, 2)).toBe(4);
});
