import type { PageLoad } from "./$types";

import fieldsOfWork from "../../data/wikibase-cache/fields-of-work.json";

type Edge = [Node, Node];

type Fow = {
  id: string;
};

type Graph = {
  edges: Edge[];
  nodes: Node[];
};

type Node = {
  data: unknown;
  id: string;
  type: "field" | "person";
};

function grabGraphParts(r: Record<string, { fows: Fow[] }>) {
  const edges: Edge[] = [];

  const nodes: Node[] = [];

  const fmap = new Set();

  Object.entries(r).forEach(([a, b]) => {
    nodes.push({
      data: {},
      id: a,
      type: "person",
    });

    b.fows.forEach((f) => {
      if (!fmap.has(f.id)) {
        fmap.add(f.id);
        nodes.push({
          data: f,
          id: f.id,
          type: "field",
        });
      }
    });
  });

  return { edges, nodes };
}

export const load = (async ({ fetch }) => {
  const f = Object.values(fieldsOfWork.people)
    .map((g) => g.fows.map((f) => ({ ...f, data: {} })))
    .flat();

  const graph: Graph = grabGraphParts(fieldsOfWork.people);

  return { graph };
}) satisfies PageLoad;
