## 一个 TODO 命令行工具

文件功能介绍：

- cli.js：使用 commander 编写 TODO 的选项和命令
- db.js: 使用 fs 实现异步读写文件
- index.js: 主程序。通过调用 db.js 提供的读写方法，实现 TODO 命令的逻辑。

### 运行

`node cli`: 使用 TODO 命令行工具
![](/imgs/demo1.png)

`node cli -h`: 显示所有可行的选项和命令

![](/imgs/demo2.png)
