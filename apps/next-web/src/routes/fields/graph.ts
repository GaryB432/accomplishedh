export type Graph = {
  edges: Edge[];
  nodes: Node[];
};
type Connection = {
  category: string;
  human: string;
  id: string;
  label: string;
};

type Edge = [Node, Node];

type El = {
  data?: unknown;
  id: string;
  type: string;
};

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

export function graph(conns: Connection[]): {
  edges: Set<[El, El]>;
  nodes: Set<El>;
} {
  const nfset = new Set();
  const nodes = new Set<El>();
  const edges = new Set<[El, El]>();

  for (const conn of conns) {
    const h = { data: {}, id: conn.human, type: "person" };
    const f = { data: conn, id: conn.id, type: "field" };
    if (!nfset.has(h.id)) {
      nfset.add(h.id);
      nodes.add(h);
    }
    if (!nfset.has(f.id)) {
      nfset.add(f.id);
      nodes.add(f);
    }
    edges.add([h, f]);
  }

  return { edges, nodes };
}
