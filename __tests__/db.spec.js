const db = require("../db.js");
const fs = require("fs");
jest.mock("fs");

describe("db", () => {
  afterEach(() => {
    // 每次测试完成后要清除Mock，保证每次测试环境独立
    fs.clearMocks();
  });
  it("can read", async () => {
    const data = [{ title: "hi", done: true }];
    fs.setReadFileMock("/xxx", null, JSON.stringify(data));
    const list = await db.read("/xxx");
    expect(list).toStrictEqual(data); // 测试两个对象相等用toStrictEqual
  });

  it("can write", async () => {
    let fakeFile = "";
    fs.setWriteFileMock("/yyy", (path, data, callback) => {
      fakeFile = data;
      callback(null);
    });
    const list = [
      { title: "见赵盼儿", done: true },
      { title: "见刘亦菲", done: true },
    ];
    await db.write(list, "/yyy");
    expect(fakeFile).toBe(JSON.stringify(list) + "\n");
  });
});
