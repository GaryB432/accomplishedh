// import * as shared from "@accomplishedh/shared";
import { type EuroHuman, Logger, padSerialForKey } from "@accomplishedh/shared";
import { afterEach } from "node:test";
import { beforeEach, describe, expect, test, vi } from "vitest";

import * as FsDataSUT from "./fe-data.svelte";

let instance: Logger;

const OG: EuroHuman = {
  adultbasic: "",
  adultregion: "",
  death: "",
  dob: "",
  era: "",
  id: "",
  inventory: "",
  knownFor: "",
  name: "",
  osfName: "",
  portrait: {
    img: { src: "" },
  },
  props: [],
  serial: "",
  sr: undefined,
  yob: "",
};
const JIM: EuroHuman = { ...OG, id: "JIM-10000000999", serial: "JIM" };
const BOB: EuroHuman = { ...OG, id: "BOB-20000000999", serial: "BOB" };
const TOM: EuroHuman = { ...OG, id: "TOM-30000000999", serial: "TOM" };

const individuals = [JIM, BOB, TOM].map((h) => ({
  ...h,
  serial: padSerialForKey(h.serial),
}));

const featuredsArray = [
  {
    human: {
      id: JIM.id,
    },
    id: "featured-0",
    stamp: "2222-02-22",
  },
  {
    human: {
      id: "improper-guid-hmmm",
    },
    id: "featured-1",
    stamp: "3999-01-01",
  },
  {
    human: {
      id: BOB.id,
    },
    id: "featured-2",
    stamp: "2222-02-22",
  },
];

const volume_contents: Record<string, object> = {
  "test/path/featured.json": featuredsArray,
  "test/path/serials.json": individuals.reduce<Record<string, string>>(
    (a, b) => {
      a[b.serial] = b.id;
      return a;
    },
    {},
  ),
  "test/path/shards/1.json": individuals.filter(
    (i) => i.id.slice(4, 5) === "1",
  ),
  "test/path/shards/2.json": individuals.filter(
    (i) => i.id.slice(4, 5) === "2",
  ),
  "test/path/wb.json": { [BOB.id]: "QBOB", [JIM.id]: "QJIM", [TOM.id]: "QTOM" },
};

function fetch_function(input: Request | string | URL): Promise<Response> {
  const relative_path = input.toString();
  const contents = volume_contents[relative_path];

  const good_body = JSON.stringify(contents ?? "not found");

  return new Promise<Response>((resolve) => {
    const m = new Response(good_body, { status: contents ? 200 : 404 });
    resolve(m);
  });
}

describe("getHuman", () => {
  let data_svc: FsDataSUT.FeDataSvc;
  instance = new Logger();

  beforeEach(async () => {
    data_svc = await FsDataSUT.FeDataSvc.create(
      fetch_function,
      instance,
      "test/path",
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  //   const readArraySpy = vi.spyOn(utils, 'readArraySync');

  test("gets jim", async () => {
    const log = vi.spyOn(instance, "log").mockReturnValue();
    const subject = await data_svc.getHuman(JIM.serial);
    expect(subject).toEqual({
      ...JIM,
      entity: { id: "QJIM" },
      serial: padSerialForKey(JIM.serial),
    });
    expect(log).toHaveBeenCalledWith("shards/1.json @ 1 🚀", "digestFromGuid");
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/1.json', []);
  });

  test("gets bob", async () => {
    const log = vi.spyOn(instance, "log").mockReturnValue();
    const subject = await data_svc.getHuman(BOB.serial);
    expect(subject).toEqual({
      ...BOB,
      entity: { id: "QBOB" },
      serial: padSerialForKey(BOB.serial),
    });
    expect(log).toHaveBeenCalledWith("shards/2.json @ 1 🚀", "digestFromGuid");
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/2.json', []);
  });
});

describe("get Featured Human", () => {
  let data_svc: FsDataSUT.FeDataSvc;

  beforeEach(async () => {
    instance = new Logger();
    data_svc = await FsDataSUT.FeDataSvc.create(
      fetch_function,
      instance,
      "test/path",
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  //   const readJSONSpy = vi.spyOn(utils, 'readJSONSync');
  //   const readArraySpy = vi.spyOn(utils, 'readArraySync');

  test("gets all featured humans", async () => {
    const log = vi.spyOn(instance, "log").mockReturnValue();
    const subject = await data_svc.getFeaturedHumans(true);
    expect(subject).toEqual([
      {
        human: {
          ...JIM,
          entity: { id: "QJIM" },
          serial: padSerialForKey(JIM.serial),
        },
        id: "featured-0",
        stamp: "2222-02-22",
      },
      {
        human: undefined,
        id: "featured-1",
        stamp: "3999-01-01",
      },
      {
        human: {
          ...BOB,
          entity: { id: "QBOB" },
          serial: padSerialForKey(BOB.serial),
        },
        id: "featured-2",
        stamp: "2222-02-22",
      },
    ]);
    expect(log).toHaveBeenCalledWith("shards/2.json @ 1 🚀", "digestFromGuid");
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/1.json', []);
  });

  test("gets no featured humans", async () => {
    const log = vi.spyOn(instance, "log").mockReturnValue();
    const subject = await data_svc.getFeaturedHumans(false);
    expect(log).not.toHaveBeenCalled();
    expect(subject).toEqual([]);
  });

  test("gets some featured humans", async () => {
    const log = vi.spyOn(instance, "log").mockReturnValue();
    const fellers = await data_svc.getFeaturedHumans(["2222-02-22"]);
    expect(fellers.every((g) => g.stamp === "2222-02-22"));
    const subject = fellers.at(0);
    // expect(subject).toMatchInlineSnapshot(`
    //   {
    //     "human": {
    //       "id": "JIM-10000000",
    //     },
    //     "id": "featured-0",
    //     "stamp": "2222-02-22",
    //   }
    // `);
    expect(subject?.human.id).toEqual(JIM.id);
    expect(subject?.human.entity).toEqual({ id: "QJIM" });
    expect(log).toHaveBeenCalledTimes(2);
  });
});
