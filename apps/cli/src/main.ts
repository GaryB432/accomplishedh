import { cac } from "cac";

const prog = cac("ha");

prog
  .command("featured <start>", "Create json file of daily featureds")
  .option("--days", "The number of days to create featureds", { default: 7 })
  .option("--perday", "The number of featureds per day", { default: 6 })
  .action(async (start, opts) => {
    const { featuredCommand } = await import(
      "./app/commands/featured.command.js"
    );
    console.log(start, opts);
    void (await featuredCommand({ start, opts }));
  });

prog
  .command(
    "botd <today>",
    "Lists persons born on this day for social media posting",
  )
  .option(
    "-l, --listOnly",
    "Skips posts.json and lists post bodies to console for copy/paste",
  )
  .action(async (today, opts) => {
    const { botdCommand } = await import("./app/commands/botd.command.js");
    console.log(today, opts);
    void (await botdCommand({ today, opts }));
  });

// Display help message when `-h` or `--help` appears
prog.help();
// Display version number when `-v` or `--version` appears
// It's also used in help message
prog.version("0.0.0");

try {
  prog.parse(process.argv, { run: false });

  prog.runMatchedCommand();
} catch (cace) {
  const error = cace as Error;
  console.error(error.message);
  if (error.name === "CACError") {
    prog.outputHelp();
  } else {
    console.error(error.stack);
  }
  process.exit(1);
}
