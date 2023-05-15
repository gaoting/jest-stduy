const sum = require("../../demo/demo1/sum");

/**
 * expect(value): value 为被测代码返回值
 * tobe(value): 匹配器  对比原始值or 对象实例的引用，相当于 ===
 */
test("1+2 === 3", () => {
  expect(sum(1, 2)).toBe(3);
});
