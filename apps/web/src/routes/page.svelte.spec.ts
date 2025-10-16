import { page } from "@vitest/browser/context";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import Page from "./+page.svelte";

describe("/+page.svelte", () => {
  it("should render title", async () => {
    render(Page);

    const heading = page.getByText("accomplished people");
    await expect.element(heading).toBeInTheDocument();
  });
});
