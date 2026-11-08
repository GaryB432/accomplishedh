import { page } from "vitest/browser";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import SimpleClaims from "./PersonSimpleClaims.svelte";

describe("PersonSimpleClaims.svelte", () => {
  it("renders greetings for host and guest", async () => {
    render(SimpleClaims, { qid: "Q999999" });

    // await expect
    //   .element(page.getByTestId("claims"))
    //   .toHaveTextContent("So long, SvelteKit!");
    await expect.element(page.getByTestId("claims-list")).toBeInTheDocument();
  });
});
