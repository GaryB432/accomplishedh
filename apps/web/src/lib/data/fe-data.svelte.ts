import {
  Logger,
  padSerialForKey,
  shardKeyFor,
  type FeaturedHuman,
  type WikiHuman,
} from "@accomplishedh/shared";
import { join } from "node:path";
import { getShardPathFor, type FormDataHuman } from "./utils";
import { SvelteSet } from "svelte/reactivity";

const banner = [
  "",
  "                                        _ _     _              _ _    _ ",
  "     /\\                                | (_)   | |            | | |  | |",
  "    /  \\   ___ ___ ___  _ __ ___  _ __ | |_ ___| |__   ___  __| | |__| |",
  "   / /\\ \\ / __/ __/ _ \\| '_ ` _ \\| '_ \\| | / __| '_ \\ / _ \\/ _` |  __  |",
  "  / ____ \\ (_| (_| (_) | | | | | | |_) | | \\__ \\ | | |  __/ (_| | |  | |",
  " /_/    \\_\\___\\___\\___/|_| |_| |_| .__/|_|_|___/_| |_|\\___|\\__,_|_|  |_|",
  "                                 | |                                    ",
  "                                 |_|                                    ",
  "",
];
console.log(banner.join("\n"));

export class FeDataSvc {
  private digestedHumans: Record<string, WikiHuman>;
  private readonly shardPathsDone = new SvelteSet();
  private readonly top = {
    guidsBySerial: {} as Record<string, string>,
    wbidsByGuid: {} as Record<string, string>,
  };

  private constructor(
    private fetch: (
      input: string | URL | globalThis.Request,
    ) => Promise<globalThis.Response>,
    private logger: Logger,
    private rootDir: string,
  ) {
    this.digestedHumans = {};
    // this.logger.log(`new for ${rootDir}`, this.constructor.name);
  }

  public static async create(
    fetch: (
      input: string | URL | globalThis.Request,
    ) => Promise<globalThis.Response>,
    logger: Logger = new Logger(),
    rootDir = "/data",
  ): Promise<FeDataSvc> {
    const instance = new FeDataSvc(fetch, logger, rootDir);
    await instance.initialize();
    return instance;
  }

  public async clearCaches(): Promise<boolean> {
    // this.digestedHumans = {};
    // this.top.guidsBySerial = {};
    // this.top.wbidsByGuid = {};
    // TODO implement.  needs top refresh.
    return false;
  }

  public async getFeaturedHumans(
    iso: string[] | boolean,
  ): Promise<FeaturedHuman[]> {
    const featuredsPath = join("featured.json");

    const allFeatured = await this.fetchArray<FeaturedHuman>(featuredsPath);

    // const allFeatured = readArraySync<FeaturedHuman>(featuredsPath);

    const requestedIsos = new SvelteSet<string>();
    if (Array.isArray(iso)) {
      iso.map((f) => f.slice(0, 10)).forEach(requestedIsos.add, requestedIsos);
    }

    const take: (fh: FeaturedHuman) => boolean = (fh: FeaturedHuman) =>
      (typeof iso === "boolean" && iso) || requestedIsos.has(fh.stamp);

    const fhs = allFeatured.filter(take);

    for (const fh of fhs) {
      const wh = this.digestedHumans[fh.human.id];

      fh.human = wh ? wh : await this.digestFromGuid(fh.human.id);
    }

    // this.logger.log(`featureds: ${fhs.length}`, this.getFeaturedHumans.name);
    return fhs;
  }

  public async getHuman(serial: string): Promise<WikiHuman | undefined> {
    const id = this.top.guidsBySerial[padSerialForKey(serial)];
    if (!id) {
      // throw new Error(`no record ${serial}`)
      return undefined;
    }
    return this.digestFromGuid(id);
  }

  public async putHuman(h: FormDataHuman): Promise<WikiHuman | undefined> {
    throw new Error("not implemented");
  }

  private async digestFromGuid(humanId: string): Promise<WikiHuman> {
    if (!this.digestedHumans[humanId]) {
      const sk = shardKeyFor({ id: humanId });

      const relative_path = getShardPathFor(sk, join("shards", "*.json"));

      const shard_fn = join(this.rootDir, relative_path);

      if (!this.shardPathsDone.has(shard_fn)) {
        const shardResponse = await this.fetch(shard_fn);
        const plain_old_hs = (await shardResponse.json()) as WikiHuman[];
        for (const poh of plain_old_hs) {
          const entity = { id: this.top.wbidsByGuid[poh.id] };
          this.digestedHumans[poh.id] = { ...poh, entity };
        }
        this.logger.log(
          `${relative_path} @ ${plain_old_hs.length} 🚀`,
          this.digestFromGuid.name,
        );
        this.shardPathsDone.add(shard_fn);
      }
    }
    return this.digestedHumans[humanId];
  }

  private async fetchArray<T>(fname: string): Promise<T[]> {
    const response = await this.fetch(join(this.rootDir, fname));
    if (!response.ok) {
      throw new Error(`${fname} does not exist`);
    }
    return response.json() as Promise<T[]>;
  }

  private async fetchStringRecord(
    fname: string,
  ): Promise<Record<string, string>> {
    const response = await this.fetch(join(this.rootDir, fname));
    if (!response.ok) {
      throw new Error(`${fname} does not exist`);
    }
    return response.json() as Promise<Record<string, string>>;
  }

  private async initialize(): Promise<void> {
    this.top.guidsBySerial = await this.fetchStringRecord("serials.json");
    this.top.wbidsByGuid = await this.fetchStringRecord("wb.json");
  }
}
