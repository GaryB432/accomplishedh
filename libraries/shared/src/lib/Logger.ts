// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

interface OpenClose {
  close: string;
  open: string;
}

const white = {
  open: "\u001B[37m",
  close: "\u001B[0m",
};
const green = {
  open: "\u001B[32m",
  close: "\u001B[0m",
};
const yellow = {
  open: "\u001B[33m",
  close: "\u001B[0m",
};
const red = {
  open: "\u001B[31m",
  close: "\u001B[0m",
};

function colorize(message: string, colorCodes: OpenClose): string {
  return [colorCodes.open, message, colorCodes.close].join("");
}

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
