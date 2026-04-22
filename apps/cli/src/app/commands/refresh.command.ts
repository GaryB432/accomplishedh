import { confirm } from "@inquirer/prompts";
import colors from "picocolors";

import { sleep } from "@accomplishedh/shared";
import { readAll } from "../data/wb/fs-reader.js";
import { type CommandArgs } from "./refresh.types.js";

export async function refreshCommand({
  opts,
  today,
}: CommandArgs): Promise<void> {
  console.log(opts);
  if (!today || today.length !== 10) {
    throw new Error("now must be ISO Date");
  }

  // if (!opts.listOnly) {
  //   throw new Error("only listOnly is supprted in this version");
  // }
  console.log(
    colors.bgBlue(
      colors.white(
        "https://business.facebook.com/latest/home?asset_id=100786702612447",
      ),
    ),
  );
  console.log(colors.gray("https://www.facebook.com/AccomplishedH"));

  const everybody = readAll();
  const subjects = everybody.filter((h) => h);
  console.log(subjects);

  // let i = 0;

  // for (const botdh of botdEuros) {
  //   while (true) {
  //     const human = readById(botdh.id)!;
  //     console.log(colors.cyan(`${human.name} ${human.yob}`));

  //     const { enhancedText, raw, valid } = checkForTweet(human);
  //     console.log(enhancedText);

  //     if (!("src" in human.portrait.img)) {
  //       console.log(colors.yellowBright("Note: No portrait src"));
  //     }

  //     if (!valid) {
  //       console.log(
  //         `${colors.bgYellowBright(
  //           colors.black("Fix and answer N to retry:"),
  //         )} ${colors.yellowBright(humanUrl(human))}`,
  //       );
  //     }

  //     await copyToClipboard(raw);
  //     console.log();
  //     const posted = await askIfPosted();
  //     console.log();
  //     if (posted) {
  //       i++;
  //       break;
  //     }
  //   }
  // }
  console.log(
    colors.cyanBright(` ${today} ${subjects.length} refreshed i guess `),
  );
  return await sleep(500);
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
// function readAll(): EuroHuman[] {
//   return [];
// }

// function readById(id: string) {
//   const e: EuroHuman = {
//     adultbasic: "",
//     adultregion: "",
//     death: "",
//     dob: "",
//     era: "",
//     id,
//     inventory: "",
//     knownFor: "",
//     name: "",
//     osfName: "",
//     portrait: { img: { src: "" } },
//     props: [],
//     serial: "",
//     sr: undefined,
//     yob: "",
//   };
//   return e;
// }
