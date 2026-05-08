import { render } from "svelte/server";
import { describe, expect, it } from "vitest";

import TryNextWeb from "./TryNextWeb.svelte";

describe("TryNextWeb", () => {
  it("renders promotion copy, target link and beta tag", () => {
    const { body } = render(TryNextWeb);

    expect(body).toContain("Try the next version of Human Accomplishment");
    expect(body).toContain(">BETA<");
    expect(body).toContain('href="https://accomplishedh-next-web.vercel.app/"');
    expect(body).toContain(
      'aria-label="Try the next version of Human Accomplishment (BETA)"',
    );
    expect(body).toContain('target="_blank"');
    expect(body).toContain('rel="noopener noreferrer"');
  });
});
