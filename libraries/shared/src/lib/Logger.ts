// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

interface OpenClose {
  close: string;
  open: string;
}

const white = {
  close: "\u001B[0m",
  open: "\u001B[37m",
};
const green = {
  close: "\u001B[0m",
  open: "\u001B[32m",
};
const yellow = {
  close: "\u001B[0m",
  open: "\u001B[33m",
};
const red = {
  close: "\u001B[0m",
  open: "\u001B[31m",
};

export class Logger {
  public log(message: string, source?: string): void {
    console.log(
      [
        colorize(this.stamp(new Date()), white),
        colorize(message, green),
        colorize(source ?? "s", source ? yellow : red),
      ].join(" "),
    );
  }
  private stamp(now: Date): string {
    return now.toISOString();
  }
}

function colorize(message: string, colorCodes: OpenClose): string {
  return [colorCodes.open, message, colorCodes.close].join("");
}
