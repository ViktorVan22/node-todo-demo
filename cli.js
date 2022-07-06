const program = require("commander");
const api = require("./index.js");

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");
program
  .command("add")
  .description("add a task")
  .action((...args) => {
    const words = args.slice(0, -1).join(" ");
    api.add(words);
  });
program
  .command("clear")
  .description("clear all tasks")
  .action((...args) => {
    console.log("this is clear");
  });

program.parse(process.argv);

// console.log(program.debug);