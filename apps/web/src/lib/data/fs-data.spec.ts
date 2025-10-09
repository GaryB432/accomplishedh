import { padSerialForKey, type EuroHuman } from "@accomplishedh/shared";
import { afterEach } from "node:test";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as FsDataSUT from "./fe-data.svelte";

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
const JIM: EuroHuman = { ...OG, serial: "JIM", id: "JIM-10000000999" };
const BOB: EuroHuman = { ...OG, serial: "BOB", id: "BOB-20000000999" };
const TOM: EuroHuman = { ...OG, serial: "TOM", id: "TOM-30000000999" };

const individuals = [JIM, BOB, TOM].map((h) => ({
  ...h,
  serial: padSerialForKey(h.serial),
}));

const featuredsArray = [
  {
    id: "featured-0",
    stamp: "2222-02-22",
    human: {
      id: JIM.id,
    },
  },
  {
    id: "featured-1",
    stamp: "3999-01-01",
    human: {
      id: "improper-guid-hmmm",
    },
  },
  {
    id: "featured-2",
    stamp: "2222-02-22",
    human: {
      id: BOB.id,
    },
  },
];

const volume_contents: Record<string, object> = {
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
  "test/path/wb.json": { [JIM.id]: "QJIM", [BOB.id]: "QBOB", [TOM.id]: "QTOM" },
  "test/path/featured.json": featuredsArray,
};

function fetch_function(input: string | URL | Request): Promise<Response> {
  const relative_path = input.toString();
  const contents = volume_contents[relative_path];

  if (!contents) {
    console.log(Object.keys(volume_contents));
    console.log(relative_path);
  }

  const good_body = JSON.stringify(contents ?? "not found");

  return new Promise<Response>((resolve) => {
    const m = new Response(good_body, { status: contents ? 200 : 404 });
    resolve(m);
  });
}

describe("getHuman", () => {
  let data_svc: FsDataSUT.FeDataSvc;

  beforeEach(async () => {
    data_svc = await FsDataSUT.FeDataSvc.create(fetch_function, "test/path");
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  //   const readArraySpy = vi.spyOn(utils, 'readArraySync');

  test("gets jim", async () => {
    const subject = await data_svc.getHuman(JIM.serial);
    expect(subject).toEqual({
      ...JIM,
      serial: padSerialForKey(JIM.serial),
      entity: { id: "QJIM" },
    });
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/1.json', []);
  });

  test("gets bob", async () => {
    const subject = await data_svc.getHuman(BOB.serial);
    expect(subject).toEqual({
      ...BOB,
      serial: padSerialForKey(BOB.serial),
      entity: { id: "QBOB" },
    });
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/2.json', []);
  });
});

describe("get Featured Human", () => {
  let data_svc: FsDataSUT.FeDataSvc;

  beforeEach(async () => {
    data_svc = await FsDataSUT.FeDataSvc.create(fetch_function, "test/path");
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  //   const readJSONSpy = vi.spyOn(utils, 'readJSONSync');
  //   const readArraySpy = vi.spyOn(utils, 'readArraySync');

  test("gets all featured humans", async () => {
    const subject = await data_svc.getFeaturedHumans(true);
    expect(subject).toEqual([
      {
        human: {
          ...JIM,
          serial: padSerialForKey(JIM.serial),
          entity: { id: "QJIM" },
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
          serial: padSerialForKey(BOB.serial),
          entity: { id: "QBOB" },
        },
        id: "featured-2",
        stamp: "2222-02-22",
      },
    ]);
    // expect(readJSONSpy).toHaveBeenCalledTimes(6);
    // expect(readJSONSpy).toHaveBeenCalledWith('test/path/serials.json');
    // expect(readArraySpy).toHaveBeenCalledWith('test/path/shards/1.json', []);
  });

  test("gets no featured humans", async () => {
    const subject = await data_svc.getFeaturedHumans(false);
    expect(subject).toEqual([]);
  });

  test("gets some featured humans", async () => {
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
  });
});
