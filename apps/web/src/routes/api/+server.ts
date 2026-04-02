import type { RequestHandler } from "./$types";

import { getHeaders } from "./get-headers";

export const OPTIONS: RequestHandler = async () => {
  return new Response("", { headers: getHeaders(), status: 200 });
};
