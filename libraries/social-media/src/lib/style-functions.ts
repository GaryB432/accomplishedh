interface StyleFunction {
  (s: string): string;
}

interface TweetColors {
  good: StyleFunction;
  warn: StyleFunction;
}

// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#file-ansi-md
export const coolors: TweetColors = {
  good: (s: string) => "\x1b[42;37m".concat(s).concat("\x1b[39;49m"), // bggreenwhite
  warn: (s: string) => "\x1b[43;30m".concat(s).concat("\x1b[39;49m"), // bgYellow.black(s),
};
