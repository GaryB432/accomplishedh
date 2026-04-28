export type Graph = {
  edges: Edge[];
  nodes: Node[];
};
type Edge = [Node, Node];

type Fow = {
  id: string;
};

type Node = {
  data: unknown;
  id: string;
  type: "field" | "person";
};

export function grabGraphParts(r: Record<string, { fows: Fow[] }>): Graph {
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
