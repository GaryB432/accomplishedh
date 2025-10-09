import type { Laureate } from "./nobel.types.js";

export interface Life {
  born?: string | undefined;
  died?: string | undefined;
}
export interface Property {
  name: string;
  seq: number;
  source: "wikimedia" | "osf" | "ha";
  value: string;
}
export interface Portrait {
  above?: string | undefined;
  caption?: string | undefined;
  img: Record<string, string>;
}
export interface EuroHuman {
  adultbasic: string;
  adultregion: string;
  death: string;
  dob: string;
  era: string;
  id: string;
  inventory: string | string[];
  knownFor: string;
  name: string;
  nobel?:
    | {
        laureate: Laureate;
      }
    | undefined;
  osfName: string;
  portrait: Portrait;
  props: Property[];
  serial: string;
  sr:
    | {
        ns: number;
        pageid: number;
        size: number;
        snippet: string;
        timestamp: string;
        title: string;
        wordcount: number;
      }
    | undefined;
  yob: string;
}

export interface WikiHuman extends EuroHuman {
  entity?: { id: string };
}

export interface FeaturedSubject {
  human: Pick<EuroHuman, "id">;
  id: string;
  stamp: string;
}

export interface FeaturedHuman extends FeaturedSubject {
  human: WikiHuman;
}

export function highlightDefiniteArticle(message: string): {
  marker: number;
  p: string[];
} {
  const msg = message.trim();
  const articles = ["a", "an"];
  const words = msg.split(/\s+/, 3);
  const first_word = words[0] ?? "";
  const marker = articles.includes(first_word) ? 0 : first_word.length;
  const p = [msg === "" ? "░░░" : msg.slice(0, marker), msg.slice(marker)];
  return { marker, p };
}

// tested here. copied to apps/extension/src/scripts/sw.ts
export function diffCount(newIds: string[], savedIds: string[]): number {
  return newIds.reduce<number>((counter, id) => {
    if (!savedIds.includes(id)) {
      counter++;
    }
    return counter;
  }, 0);
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex: number;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    if (array[currentIndex]) {
      [array[currentIndex], array[randomIndex]] = [
        <T>array[randomIndex],
        <T>array[currentIndex],
      ];
    }
  }
  return array;
}
export function padSerialForKey(serial: string): string {
  return serial.padStart(6, "0").slice(0, 6);
}

export function shardKeyFor(h: Pick<EuroHuman, "id">): string {
  return h.id.slice(4, 5);
}

export async function sleep(ms = 1000) {
  return new Promise((cb) => setTimeout(cb, ms));
}

// TODO coverage
const replacements: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
};
const pattern = new RegExp(Object.keys(replacements).join("|"), "gi");

export function encodeHTML(unencoded: string): string {
  return unencoded.replace(pattern, function (matched) {
    return replacements[matched]!;
  });
}

/**
 * return the first value of a record type
 * @param singleEntryRecord record with only one entry
 * @returns the first value of the record
 */
export function firstAndOnly<T>(
  singleEntryRecord: Record<string, T> | undefined,
): T | undefined {
  const es = { ...singleEntryRecord };

  const keys = Object.keys(es);
  if (keys.length === 1) {
    return Object.values(es)[0];
  }
  throw new TypeError(`expected one element`, {
    cause: JSON.stringify(keys),
  });
}

async function* batchAsyncIterable<T>(
  source: AsyncIterable<T>,
  batchSize: number,
): AsyncGenerator<T[]> {
  let currentBatch: T[] = [];
  for await (const item of source) {
    currentBatch.push(item);
    if (currentBatch.length >= batchSize) {
      yield currentBatch;
      currentBatch = []; // Reset the batch
    }
  }
  // Yield any remaining items in the last batch
  if (currentBatch.length > 0) {
    yield currentBatch;
  }
}

// Example usage:
async function* simulateDataSource(): AsyncGenerator<number> {
  for (let i = 0; i < 15; i++) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async operation
    yield i;
  }
}

async function processBatches() {
  const dataSource = simulateDataSource();
  const batchSize = 5;

  console.log("Starting batch processing...");
  for await (const batch of batchAsyncIterable(dataSource, batchSize)) {
    console.log("Processing batch:", batch);
    // Simulate an asynchronous operation on the batch
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log("Batch processed.");
  }
  console.log("Finished batch processing.");
}

export function batchify<T>(items: T[], batchSize = 10): T[][] {
  if (batchSize < 1) {
    return [items];
  }
  let ndx = 0;
  return items.reduce(
    (nested, item) => {
      if (batchSize === nested[ndx]!.length) {
        nested[++ndx] = [];
      }
      nested[ndx]!.push(item);
      return nested;
    },
    [[]] as T[][],
  );
}

// processBatches();
