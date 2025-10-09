import { type EuroHuman } from "@accomplishedh/shared";

const icons = new Map<string, string>([
  ["a", "canvas-easel-svgrepo-com.svg"],
  ["b", "canvas-svgrepo-com.svg"],
  ["Art.West", "easel-svgrepo-com.svg"],
  ["Music.West", "music-svgrepo-com.svg"],
  ["Lit.West", "open-book-svgrepo-com.svg"],
  ["f", "painter-with-beret-and-canvas-svgrepo-com.svg"],
  ["Science", "science-lab-svgrepo-com.svg"],
]);

export function getInventoryImages(
  inventory: string | string[],
  environment: { haUrl: string },
): HTMLImageElement[] {
  const inventories = Array.isArray(inventory) ? inventory : [inventory];

  return inventories.map((s) => {
    const img = document.createElement("img");
    img.setAttribute("src", `${environment.haUrl}/icons/${icons.get(s)}`);
    img.setAttribute("alt", s);
    img.setAttribute("title", s);
    return img;
  });
}

export function addAnalytics(url: string): string {
  return url + "?utm_source=extension";
}

export const socialUrls: Record<string, string> = {
  facebook: "https://www.facebook.com/AccomplishedH",
  twitter: "https://www.x.com/AccomplishedH",
};

export function setTextContent<E extends Element>(
  container: Element,
  selectors: string,
  textContent: string,
): E | null {
  const e = container.querySelector<E>(selectors);
  if (e) {
    e.textContent = textContent;
  }
  return e;
}

export function birthdayTitle(h: Pick<EuroHuman, "dob" | "yob">): string {
  return Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(new Date(`${h.yob}-${h.dob}T00:00:00.000-23:00`));
}
