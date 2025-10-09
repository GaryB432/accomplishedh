import { describe, expect, vi, test } from "vitest";
import { ProgressBar } from "./ProgressBar";

vi.mock(import("picocolors"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    default: {
      ...actual.default,
      greenBright: vi.fn((s) => `G[${s}]`),
      yellowBright: vi.fn((s) => `Y[${s}]`),
      whiteBright: vi.fn((s) => `W[${s}]`),
    },
  };
});

describe("ProgressBar", () => {
  let progressBar: ProgressBar;
  const max = 27;
  test("draws", () => {
    progressBar = new ProgressBar({ max, width: 72 });
    expect(progressBar.draw(max / 2)).toEqual(
      "####################################------------------------------------0.50",
    );
  });
  test("draws more", () => {
    const width = 60;
    const max = 4;
    progressBar = new ProgressBar({ max, width });
    const bars = Array(max + 1)
      .fill(0)
      .map((z, step) => {
        return progressBar.draw(step - z);
      });
    expect(bars).toEqual([
      "------------------------------------------------------------0.00",
      "###############---------------------------------------------0.25",
      "##############################------------------------------0.50",
      "#############################################---------------0.75",
      "############################################################1.00",
    ]);
  });
});

describe("fancy ProgressBar", () => {
  let progressBar: ProgressBar;
  const max = 27;
  test("draws", () => {
    progressBar = new ProgressBar({ max, width: 72, style: "fancy" });
    expect(progressBar.draw(max / 2)).toEqual(
      "████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0.50",
    );
  });
  test("draws more", () => {
    const width = 60;
    const max = 4;
    progressBar = new ProgressBar({ max, width, style: "fancy" });
    const bars = Array<number>(max + 1)
      .fill(0)
      .map((_, step) => {
        return progressBar.draw(step);
      });
    expect(bars).toEqual([
      "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0.00",
      "███████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0.25",
      "██████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0.50",
      "█████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0.75",
      "████████████████████████████████████████████████████████████1.00",
    ]);
  });

  test("shows", () => {
    const pb10 = new ProgressBar({ max: 10 });
    expect(pb10.show(1)).toEqual("G[]Y[█]W[▓▓▓▓▓▓▓▓▓]");
    expect(pb10.show(3)).toEqual("G[██]Y[█]W[▓▓▓▓▓▓▓]");
    expect(pb10.show(6)).toEqual("G[█████]Y[█]W[▓▓▓▓]");
    expect(pb10.show(10)).toEqual("G[█████████]Y[█]W[]");
    expect(() => pb10.show(0)).toThrowError(RangeError);
    expect(() => pb10.show(11)).toThrowError(RangeError);
  });
});
