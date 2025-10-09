import { describe, expect, type Mocked, test, vi } from "vitest";
import * as apiWrapper from "../data/api";
import { fetchDetailedEntity } from "./wb";

vi.mock("../data/api");

const mockedAxios = apiWrapper as Mocked<typeof apiWrapper>;

describe("Wb", () => {
  test("fetchDetailedEntity", async () => {
    const al = await fetchDetailedEntity("Q397");
    expect(mockedAxios.fetchEntities).toHaveBeenCalledWith(
      ["Q397"],
      ["labels", "descriptions", "aliases", "claims", "sitelinks"],
    );
    expect(al?.labels).toBeUndefined();
  });
});
