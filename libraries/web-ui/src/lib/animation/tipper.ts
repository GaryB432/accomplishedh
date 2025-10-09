import { Sequence } from "./sequence.js";

interface Vector {
  x: number;
  y: number;
}

type State = "open" | "closed";

export interface TipperOptions {
  state: State;
}

function px(n: number): string {
  return `${n}px`;
}

function pc(n: number): string {
  return `${n}%`;
}

export class Tipper {
  private dobel: HTMLElement | null = null;
  private readonly pone = Tipper.polygon(Tipper.percentPoly(0));
  private yobel: HTMLElement | null = null;

  public static percentPoly(width: number): Vector[] {
    return [
      { x: 0, y: 0 },
      { x: width * 100, y: 0 },
      { x: width * 100, y: 100 },
      { x: 0, y: 100 },
    ];
  }

  public static polygon(nodes: Vector[]): string {
    const pced = (v: Vector) => [v.x, v.y].map((p) => pc(p)).join(" ");
    return `polygon(${nodes.map(pced).join(", ")})`;
  }

  public attach(container: HTMLElement): void {
    this.dobel = container.querySelector(".dob");
    this.yobel = container.querySelector(".yob");

    if (!(this.dobel && this.yobel)) {
      throw new Error("nopel");
    }

    this.dobel.style.clipPath = this.pone;
    this.yobel.addEventListener("mouseenter", () => this.fire(400));
  }

  private fire(duration = 400): void {
    const pause = 1000;
    const gap = 4;
    const size = this.dobel?.clientWidth ?? 212;

    const lx = 1;

    const cpath = Tipper.polygon(Tipper.percentPoly(lx));

    const moveLeft = new KeyframeEffect(
      this.dobel,
      {
        ...this.translateX(-size - gap),
        clipPath: cpath,
      },
      {
        duration,
        fill: "forwards",
        easing: "ease-out",
      },
    );
    const snapBack = new KeyframeEffect(
      this.dobel,
      { ...this.translateX(0), clipPath: this.pone },
      {
        delay: pause,
        duration: 100,
        fill: "forwards",
        easing: "linear",
      },
    );

    const seq = new Sequence([
      new Animation(moveLeft),
      new Animation(snapBack),
    ]);
    seq.play();
  }

  private translateX(x: number): PropertyIndexedKeyframes {
    return {
      translate: px(x),
    };
  }
}
