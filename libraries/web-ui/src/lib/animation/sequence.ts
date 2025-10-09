export class Sequence {
  public constructor(private animations: Animation[]) {
    this.animations.forEach((a, i) => {
      if (i < this.animations.length - 1) {
        a.addEventListener("finish", () => {
          this.animations[i + 1]?.play();
        });
      }
    });
  }

  /**
   * Plays the sequence of animations in order
   *
   * @param cb a callback for when the final animation finishes
   */
  public play(cb?: (e?: AnimationPlaybackEvent) => void): void {
    if (cb) {
      this.animations[this.animations.length - 1]?.addEventListener(
        "finish",
        (e) => cb(e),
      );
    }
    this.animations[0]?.play();
  }
}
