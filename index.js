const homedir = require("os").homedir();
const home = process.env.home || homedir;

// 处理路径的
const p = require("path");
const dbPath = p.join(home, ".todo");

const fs = require("fs");

//导出的所有功能
module.exports.add = title => {
  console.log("title: ", title);
  // 读取之前的任务
  fs.readFile(dbPath, { flag: "a+" }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      let list;
      try {
        list = JSON.parse(data.toString());
      } catch (error2) {
        list = [];
      }
      const task = {
        title: title,
        done: false,
      };
      console.log("task: ", task);
      list.push(task);
      const string = JSON.stringify(list);
      fs.writeFile(dbPath, string + "\n", error3 => {
        if (error3) {
          console.log(error3);
        }
      });
    }
  });
  // 往里面添加一个title任务
  // 存储任务到文件
};
