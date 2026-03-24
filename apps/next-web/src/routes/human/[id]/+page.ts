import type { PageLoad } from "./$types";

type Iso = string;

type WikbaseEntity = {
  id: string;
  name: string;
  dob: Iso;
  notes?: string[];
};

export const load: PageLoad = (ctx) => {
  const { id } = ctx.params;

  return {
    entity: id,
  };
};
