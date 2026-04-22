import { cac } from "cac";
import type { CommandArgs as BotdArgs } from "./app/commands/botd.types.js";
import type { CommandArgs as FeaturedArgs } from "./app/commands/featured.types.js";
import type { CommandArgs as RefreshArgs } from "./app/commands/refresh.types.js";
import type { SharedOptions } from "./app/shared.js";

const prog = cac("ha");

prog
  .command("featured <start>", "Create json file of daily featureds")
  .option("--days <number>", "The number of days to create featureds", {
    default: 7,
  })
  .option("--perday <number>", "The number of featureds per day", {
    default: 6,
  })
  .option("-d, --dry-run", "Do not write changes to disk")
  .action(async (start: string, opts: SharedOptions) => {
    const { featuredCommand } =
      await import("./app/commands/featured.command.js");
    featuredCommand({ opts, start } as FeaturedArgs);
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
  .action(async (today: string, opts: SharedOptions) => {
    const { botdCommand } = await import("./app/commands/botd.command.js");
    void (await botdCommand({ opts, today } as BotdArgs));
  });

prog
  .command(
    "refresh <today>",
    "Refreshes Wikibase caches using online resources",
  )
  .action(async (today: string, opts: SharedOptions) => {
    const { refreshCommand } =
      await import("./app/commands/refresh.command.js");
    void (await refreshCommand({ opts, today } as RefreshArgs));
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
