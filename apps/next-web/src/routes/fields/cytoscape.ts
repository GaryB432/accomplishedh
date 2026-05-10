import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";
import type { EdgeDefinition, NodeDefinition, StylesheetJson } from "cytoscape";

export function createElements(
  recordByPerson: Record<PersonQid, FieldsOfWorkSummaryV1>,
): Array<NodeDefinition | EdgeDefinition> {
  const ckeys = new Set<string>();
  const hkeys = new Set<string>();
  const fkeys = new Set<string>();
  const nodes: Array<NodeDefinition | EdgeDefinition> = [];

  for (const [hq, summary] of Object.entries(recordByPerson)) {
    hkeys.add(hq);

    const person = {
      id: hq,
      type: "person",
      more: "stuff",
    };
    nodes.push({ data: person });

    for (const fow of summary.fows) {
      const capitalizedCat = fow.category.toLocaleUpperCase();
      if (!fkeys.has(fow.id)) {
        fkeys.add(fow.id);
        nodes.push({
          data: { ...fow, type: "field" },
        });
      }

      nodes.push(toEdge(hq, fow.id));

      if (!ckeys.has(capitalizedCat)) {
        ckeys.add(capitalizedCat);
        nodes.push({
          data: { id: capitalizedCat, label: fow.category, type: "cat" },
        });
      }
      nodes.push(toEdge(fow.id, capitalizedCat));
    }
  }

  return [...nodes];
}

export function toEdge(source: string, target: string): EdgeDefinition {
  return { data: { source, target, id: source.concat("→").concat(target) } };
}

export const style: StylesheetJson = [
  {
    selector: "node",
    style: {
      shape: "hexagon",
    },
  },
  {
    selector: 'node[type="field"]',
    style: {
      backgroundColor: "red",
      label: "data(label)",
    },
  },
  {
    selector: 'node[type="person"]',
    style: {
      label: "data(id)",
    },
  },
  {
    selector: 'node[type="cat"]',
    style: {
      backgroundColor: "orange",
      label: "data(label)",
    },
  },
];
