import {
  type EuroHuman,
  highlightDefiniteArticle,
} from "@accomplishedh/shared";

import { coolors } from "./style-functions";

const twitter = {
  parseTweet: (t: string) => {
    // TODO handle this
    return {
      valid: t.length < 280,
      validRangeEnd: Math.min(280, t.length) - 1,
    };
  },
};

const htags: Record<string, string> = {
  "Art.West": "#art",
  "Lit.West": "#literature",
  "Music.West": "#music",
  Science: "#science",
};

type CheckedTweet = {
  enhancedText: string;
  raw: string;
  valid: boolean;
};

export function checkForTweet(
  human: Pick<EuroHuman, "inventory" | "knownFor" | "name" | "serial" | "yob">,
): CheckedTweet {
  const inventories = Array.isArray(human.inventory)
    ? human.inventory
    : [human.inventory];

  const tags = [
    "#botd",
    "#humans",
    ...inventories.map((inv) => htags[inv]),
    "#humanaccomplishment",
  ];
  const preamble = `Born this day ${human.yob}.`;
  const text = [preamble, human.knownFor, ...tags, humanUrl(human)].join(" ");

  let enhancedText = coolors.good(text);

  let valid = true;

  const hda = highlightDefiniteArticle(human.knownFor);

  // const [hdap0, hdap1] = hda.p;
  const hdap0 = hda.p[0] ?? "";
  const hdap1 = hda.p[1] ?? "";

  valid = hda.marker === 0 && hdap1.length > 0;

  if (!valid) {
    enhancedText = enhanceParts(
      `${preamble} `,
      hdap0,
      `${hdap1} ${tags.join(" ")} ${humanUrl(human)}`,
    );
  }

  if (valid) {
    const cfn = checkForFootnotes(text);
    enhancedText = cfn.enhancedText;
    valid = cfn.valid;
  }

  const { valid: ok, validRangeEnd } = twitter.parseTweet(text);
  if (!ok) {
    valid = false;
    enhancedText = enhanceParts(
      text.slice(0, validRangeEnd),
      text.slice(validRangeEnd),
    );
  }
  const raw = text;
  return { enhancedText, raw, valid };
}

export function humanUrl(human: Pick<EuroHuman, "serial">): string {
  return `https://humanaccomplishment.com/human/${human.serial}`;
}

function checkForFootnotes(text: string): CheckedTweet {
  const parts: string[] = [];
  let ctext = text;
  let match: null | RegExpMatchArray = null;
  do {
    match = ctext.match(/\s*\[\d+\]/);
    if (match) {
      parts.push(ctext.slice(0, match.index), match[0]);
      ctext = ctext.slice((match.index ?? 0) + match[0].length);
    } else {
      parts.push(ctext);
    }
  } while (match);
  const enhancedText = enhanceParts(...parts);
  const valid = parts.length === 1;

  const raw = text;
  return { enhancedText, raw, valid };
}

function enhanceParts(...parts: string[]) {
  return parts
    .map((part, i) => (i % 2 === 0 ? coolors.good(part) : coolors.warn(part)))
    .join("");
}
