import { checkForTweet, humanUrl } from "@accomplishedh/social-media";
import { confirm } from "@inquirer/prompts";
import colors from "picocolors";

import { readAll, readById } from "../data/fs-reader.js";
import { ProgressBar } from "../ProgressBar.js";
import { type CommandArgs } from "./botd.types.js";

export async function botdCommand({ opts, today }: CommandArgs): Promise<void> {
  if (!today || today.length !== 10) {
    throw new Error("now must be ISO Date");
  }

  if (!opts.listOnly) {
    console.error("only listOnly is supported in this version");
    return;
  }
  console.log(
    colors.bgBlue(
      colors.white(
        "https://business.facebook.com/latest/home?asset_id=100786702612447",
      ),
    ),
  );
  console.log(colors.gray("https://www.facebook.com/AccomplishedH"));

  const everybody = readAll();
  const botdEuros = everybody.filter((h) => h.dob === today.slice(5, 10));

  const bar = new ProgressBar({ max: botdEuros.length });
  let i = 0;

  for (const botdh of botdEuros) {
    while (true) {
      const human = readById(botdh.id)!;
      console.log(colors.cyan(`${human.name} ${human.yob}`));
      console.log(bar.show(i + 1) + "\n");

      const { enhancedText, raw, valid } = checkForTweet(human);
      console.log(enhancedText);

      if (!("src" in human.portrait.img)) {
        console.log(colors.yellowBright("Note: No portrait src"));
      }

      if (!valid) {
        console.log(
          `${colors.bgYellowBright(
            colors.black("Fix and answer N to retry:"),
          )} ${colors.yellowBright(humanUrl(human))}`,
        );
      }

      if (!opts.listOnly) {
        await copyToClipboard(raw);
        console.log();
        const posted = await askIfPosted();
        console.log();
        if (posted) {
          i++;
          break;
        }
      } else {
        i++;
        break;
      }
    }
  }
  console.log(colors.cyanBright(` ${today} ${botdEuros.length} posted `));
}

async function askIfPosted(): Promise<boolean> {
  return await confirm({
    message: "Has this been posted or intentionally skipped?",
  });
}

async function copyToClipboard(text: string) {
  const clipboard = await import("clipboardy");
  clipboard.default.writeSync(text);
  console.log(
    `${colors.cyan("√")} ${colors.bgBlack(colors.greenBright("copied!"))}`,
  );
}
