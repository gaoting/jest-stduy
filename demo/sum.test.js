
import TestJest from './sum'

/**
 * expect(value): value 为被测代码返回值
 * tobe(value): 
 *    匹配器  
 *    对比原始值or对象实例的引用，相当于 ===
 *    不能判断浮点数，浮点数使用.toBeCloseTo()
 *    原理： 使用Object.is()进行精准判断
 */

test("1+2 === 3", () => {
  expect(TestJest.sum(1, 2)).toBe(3);
});

/**
 * toEqual(value): 匹配器，深度递归全等判断，递归检查对象或数组的每个字段。
 *    原理：Object.is()
 *    注意: 会自动忽略undefined项、稀疏数组。可使用toStrictEqual()解决
 */
test('对象赋值', () => {
  const data = {a:1}
  data['b'] = 2
  expect(data).toEqual({a:1,b:2})
})

// 使用.not 判断相反
test('adding positive numbers is not zero', () => {
  for(let a=1;a<10;a++){
    for(let b=1;b<10;b++){
      expect(a+b).not.toBe(0)
    }
  }
})

// 判断真假值 ： undefined、null、false
/**
 * toBeNull只匹配null
 * toBeUndefined只匹配undefined
 * toBeDefined 与 toBeUndefined 相反
 * toBeTruthy 匹配任何 if 语句为真
 * toBeFalsy 匹配任何 if 语句为假
*/
test('null', ()=>{
  const n = null
  expect(n).toBeNull()
})


// 判断数组和可迭代对象是否包含
test('是否含有某项',()=>{
  expect(TestJest.shoppingList).toContain('milk')
  expect(new Set(TestJest.shoppingList)).toContain('milk')
})

// 检测函数调用是否抛出error
test('fn has a bug', ()=>{
  expect(() => TestJest.comileError().toThrow())
  expect(()=>TestJest.comileError.toThrow(Error))

  expect(()=> TestJest.comileError.toThrow('this is bug, hahahah....'))
  expect(()=> TestJest.comileError.toThrow(/bug/))

})
