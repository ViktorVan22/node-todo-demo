const homedir = require("os").homedir();
const home = process.env.home || homedir;

// 处理路径的
const p = require("path");
const dbPath = p.join(home, ".todo");

const fs = require("fs");
const { resolve } = require("path");

const db = {
  read(path = dbPath) {
    // 异步操作不能return，所以需要使用Promise，成功的话调用resolve，失败就调用reject
    return new Promise((resolve, reject) => {
      fs.readFile(path, { flag: "a+" }, (error, data) => {
        if (error) return reject(error);

        let list;
        try {
          list = JSON.parse(data.toString());
        } catch (error2) {
          list = [];
        }
        resolve(list);
      });
    });
  },
  write(list, path = dbPath) {
    return new Promise((resolve, reject) => {
      const string = JSON.stringify(list);
      fs.writeFile(dbPath, string + "\n", error => {
        if (error) return reject(error);
        resolve();
      });
    });
  },
};

module.exports = db;
