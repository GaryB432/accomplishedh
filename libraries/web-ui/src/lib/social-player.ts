function translateX(x: number): string {
  return `translateX(${x}px)`;
}

function translateXToThenToZero(x: number): Keyframe[] {
  return [{ transform: translateX(x) }, { transform: translateX(0) }];
}

export function playSocialMediaAnimations(container: HTMLDivElement): void {
  const cta = container.children.item(0) as HTMLDivElement;
  const facebook = container.children.item(1) as HTMLDivElement;
  const twitter = container.children.item(2) as HTMLDivElement;

  facebook.animate(translateXToThenToZero(-500), {
    duration: 400,
  });
  cta.style.transform = "translateY(-100px)";
  twitter.animate(translateXToThenToZero(-500), {
    duration: 200,
  }).onfinish = function () {
    cta.animate(
      [{ transform: "translateY(-100px)" }, { transform: "translateY(0)" }],
      { duration: 200, fill: "forwards" },
    );
  };
}
