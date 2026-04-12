// place files you want to import through the `$lib` alias in this folder.

import { sleep } from "@accomplishedh/shared";
import { error } from "@sveltejs/kit";

export async function sleepyFetch<T>(
  input: Request | string | URL,
  init?: RequestInit,
  wait = 2000,
): Promise<T> {
  await sleep(wait);
  const r = await globalThis.fetch(input, init);
  if (r.ok) {
    return r.json() as Promise<T>;
  }
  error(503, "cannot d8a9sdf59s");
}
