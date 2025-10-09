import colors from "picocolors";

const block = "█";
const space = "▓";

export class ProgressBar {
  public constructor(
    private config: Readonly<{
      max: number;
      style?: "fancy";
      width?: number;
    }>,
  ) {}
  public draw(progress: number): string {
    const w = this.config.width ?? this.config.max;
    const dw = progress / this.config.max;
    const doneSize = w * dw;
    if (!this.config.style) {
      return "#"
        .repeat(doneSize)
        .concat("-".repeat(w - doneSize))
        .concat(dw.toFixed(2));
    }
    return block
      .repeat(doneSize)
      .concat(space.repeat(w - doneSize))
      .concat(dw.toFixed(2));
  }
  public show(progress: number): string | null {
    if (progress < 1 || progress > this.config.max) {
      throw RangeError("Invalid progress");
    }
    const donePart = colors.greenBright(block.repeat(progress - 1));
    const doingPart = colors.yellowBright(block);
    const pendingPart = colors.whiteBright(
      space.repeat(this.config.max - progress),
    );
    return donePart.concat(doingPart).concat(pendingPart);
  }
}
