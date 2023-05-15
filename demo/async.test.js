import AsyncJesr from "./async.js";

test("判断", () => {
  function callback(data) {
    expect(data).toEqual({ msg: "ok" });
  }
  AsyncJesr.getFn(callback);
});

test("测试fetch请求参数", async () => {
  await AsyncJesr.fetchData();
  expect.assertions(1);
  try {
    await AsyncJesr.fetchData();
    expect(myBeverages()).toContainEqual({ res: 200 });
  } catch (e) {
    expect(e).toMatch("error");
  }
});
