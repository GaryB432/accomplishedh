import type { EuroHuman } from "@accomplishedh/shared";
import {
  Tipper,
  addAnalytics,
  birthdayTitle,
  getInventoryImages,
  playSocialMediaAnimations,
  setTextContent,
  socialUrls,
} from "@accomplishedh/web-ui";
import { getFeatureds } from "./featured";

import { environment } from "@environments/environment";
import "./styles/popup.scss";

const el = document.querySelector(".popup-vp");
const art = document.querySelector(".art");
const humanTemplate = document.querySelector<HTMLTemplateElement>("#human-tpl");
const infoTemplate = document.querySelector<HTMLTemplateElement>("#info-tpl");

const social = document.querySelector<HTMLDivElement>(".social");

if (!(el && art && humanTemplate && social && infoTemplate)) {
  throw new Error("not setup right");
}

function addChromeTab(h: EuroHuman): EventListener {
  return () => {
    void chrome.tabs.create({
      url: addAnalytics(`${environment.haUrl}/human/${h.serial}`),
    });
    return false;
  };
}

async function drawHumans(
  humans: EuroHuman[],
  container: Node,
  template: HTMLTemplateElement,
): Promise<void> {
  container.textContent = "";
  let hn = 0;
  for (const h of humans) {
    const tipper = new Tipper();
    const hdt = template.content.cloneNode(true) as Element;
    const hd = hdt.querySelector<HTMLDivElement>(".human");
    if (hd) {
      hd.setAttribute("style", `--animation-order:${hn++}`);
      setTextContent(hd, ".right > .top > div:nth-child(1)", h.name);
      setTextContent(hd, "div.kf", h.knownFor);
      const img = hd.querySelector("img");
      if (img) {
        const src = h.portrait.img["src"] ?? "//example.com/wtf";
        img.src = `https:${src}`;
      }
      const pieces = hd.querySelector(".pieces");
      if (pieces) {
        if (h.yob && h.dob) {
          const longDob = `Born: ${birthdayTitle(h)}`;
          const dyob = document.createElement("div");
          dyob.classList.add("dyob");
          if (h.dob) {
            const fdiv = document.createElement("div");
            fdiv.classList.add("dob");
            fdiv.innerHTML = `<div>${longDob}</div>`;
            dyob.appendChild(fdiv);
            if (infoTemplate) {
              const infoIconSvg = (
                infoTemplate.content.cloneNode(true) as HTMLElement
              ).querySelector("svg");
              if (infoIconSvg) {
                fdiv.appendChild(infoIconSvg);
              }
            }
          }

          if (h.yob) {
            const fdiv = document.createElement("div");
            fdiv.classList.add("yob");
            fdiv.innerText = `b: ${h.yob}`;
            dyob.appendChild(fdiv);
          }
          pieces.appendChild(dyob);
        }
        if (h.nobel) {
          const medal = document.createElement("img");
          medal.src = `${environment.haUrl}/Nobel_Prize.png`;
          medal.title = "Nobel Prize Laureate";
          pieces.appendChild(medal);
        }
        getInventoryImages(h.inventory, environment).forEach((img) =>
          pieces.appendChild(img),
        );
      }
      hd.addEventListener("click", addChromeTab(h));
      tipper.attach(hd);
      container.appendChild(hd);
    }
  }
}

social.querySelectorAll("div:has(svg)").forEach((e) => {
  const url = socialUrls[e.className];
  if (url) {
    e.addEventListener("click", () => {
      void chrome.tabs.create({ url });
    });
  }
});

art.addEventListener("click", () => {
  void chrome.tabs.create({
    url: addAnalytics(environment.haUrl),
  });
  return false;
});

chrome.runtime.onMessage.addListener(
  (msg: { humans?: EuroHuman[] }, sender?: { tab?: unknown }) => {
    if (msg.humans) {
      if (sender && !sender.tab) {
        void drawHumans(msg.humans, el, humanTemplate);
      }
    }
  },
);

document.querySelectorAll("svg.stormy").forEach((d) => {
  d.setAttribute("style", `--drip:${Math.hypot(3, 1.5)}`);
});

async function main(
  container: Element,
  template: HTMLTemplateElement,
): Promise<void> {
  const noFeatureds = document.querySelector<HTMLDivElement>(".no-featureds");
  const loadingEl = document.querySelector<HTMLDivElement>(".loading");
  try {
    const hs = await getFeatureds();
    if (loadingEl) {
      loadingEl.remove();
    }
    if (hs.length === 0) {
      if (noFeatureds) {
        noFeatureds.classList.add("show");
        noFeatureds.querySelectorAll("p:last-child").forEach((p) => {
          p.textContent = "This extension is no longer supported.";
        });
      }
    } else {
      void drawHumans(hs, container, template);
    }
  } catch (e) {
    if (loadingEl) {
      loadingEl.remove();
    }
    if (noFeatureds) {
      const m = e as Error;
      console.error(m.message);
      noFeatureds.classList.add("show");
    }
  }
  await chrome.action.setBadgeText({ text: "" });
}

playSocialMediaAnimations(social);
void main(el, humanTemplate);
