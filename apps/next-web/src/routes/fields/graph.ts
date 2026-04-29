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

  const fmap = new Set<string>();
  const emap = new Set<string>();
  let dupliatedConnectionCount = 0;

  Object.entries(r).forEach(([personq, personRow]) => {
    const personNode = {
      data: {},
      id: personq,
      type: "person" as const,
    };
    nodes.push(personNode);

    personRow.fows
      .map((fieldNode) => ({
        data: fieldNode,
        type: "field" as const,
        id: fieldNode.id,
      }))
      .forEach((fieldNode) => {
        if (!fmap.has(fieldNode.id)) {
          fmap.add(fieldNode.id);
          nodes.push(fieldNode);
        }
        const hedgeRow = [fieldNode, personNode] as Edge;
        const edgeId = fieldNode.id.concat("|".concat(personNode.id));
        if (emap.has(edgeId)) {
          dupliatedConnectionCount++;
        } else {
          emap.add(edgeId);
          edges.push(hedgeRow);
        }
      });

    // b.fows.forEach((f) => {
    //   let fieldNode: Node = {
    //     data: f,
    //     id: f.id,
    //     type: "field" as const,
    //   };
    //   // if (!fmap.has(f.id)) {
    //   //   fieldNode = {
    //   //     data: f,
    //   //     id: f.id,
    //   //     type: "field" as const,
    //   //   };

    //   //   fmap.add(f.id);
    //   //   nodes.push(fieldNode);
    //   // }
    //   edges.push([fieldNode, personNode]);
    // });
  });

  return { edges, nodes };
}
