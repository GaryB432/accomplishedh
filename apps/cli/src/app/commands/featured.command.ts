import {
  addDays,
  shuffle,
  type EuroHuman,
  type FeaturedSubject,
} from "@accomplishedh/shared";
import colors from "picocolors";
import { createHash } from "node:crypto";
import { existsSync, writeFileSync } from "fs";
import { join } from "path/posix";
import { dataPath, readAll } from "../data/fs-reader.js";
import { type CommandArgs } from "./featured.types.js";
import { normalize } from "node:path";

export function portraitedOnly(all: EuroHuman[]): EuroHuman[] {
  return all.filter(
    (h) =>
      h.portrait && "src" in h.portrait.img && h.portrait.img["src"] !== "",
  );
}

export function fillout<T>(array: T[], limit: number): T[] {
  const darray: T[] = [];
  if (array.length > 0) {
    while (darray.length < limit) {
      darray.push(...array);
    }
  }
  return darray.slice(0, limit);
}

const dataRoot = normalize(join(import.meta.dirname, "../../../../", dataPath));

const featuredsFileName = join(dataRoot, "featured.json");

export async function featuredCommand({
  start,
  opts,
}: CommandArgs): Promise<void> {
  if (!start || start.length < 10) {
    throw new Error("start should be ISO");
  }

  if (existsSync(featuredsFileName)) {
    throw new Error(`featured file already exists.`);
  }
  const all = readAll();
  console.log(
    colors.bgGreenBright(colors.whiteBright("Human records")),
    all.length,
  );

  const portraited = shuffle(portraitedOnly(all));

  const days = opts.days ?? 1;
  const hperday = opts.perday;

  const featured = fillout(portraited, days * hperday).map<FeaturedSubject>(
    (human, n) => {
      const dn = Math.floor(n / hperday);
      const futureDate = addDays(start, dn);
      if (!futureDate) {
        throw new Error("cannot add days");
      }
      const stamp = futureDate.slice(0, 10);
      console.log(
        colors.bgBlue(colors.white(stamp.slice(2, 10))),
        colors.green(human.name),
        colors.white(human.knownFor),
      );
      const id = `${stamp}@${human.serial}`;
      return { id, stamp, human: { id: human.id } };
    },
  );

  const runOutDate = addDays(start, days);

  const messageParts = [
    "HA featureds run out on",
    `${Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(runOutDate ?? "1970-01-01"))}.`,
    "Visit",
    "https://github.com/GaryB432/accomplishedh/blob/master/docs/wiki/UpdatingFeatureds.md",
    "for information on refreshing.",
  ];
  console.log(
    colors.bgGreenBright(
      colors.whiteBright("Add the following to your reminder system"),
    ),
  );
  console.log(colors.cyanBright(messageParts.join(" ")));
  if (opts.dryRun) {
    console.log(colors.yellowBright("Dry Run. Nothing written."));
  } else {
    writeFileSync(
      featuredsFileName,
      JSON.stringify(
        featured
          .map((f) => ({
            ...f,
            id: createHash("sha256").update(f.id).digest("hex"),
          }))
          .sort((a, b) => a.stamp.localeCompare(b.stamp)),
        undefined,
        2,
      ),
    );
  }
}
