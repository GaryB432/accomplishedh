type Connection = {
  category: string;
  human: string;
  id: string;
  label: string;
};

type El = {
  data?: unknown;
  id: string;
  type: string;
};

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
