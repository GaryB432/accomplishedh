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
    nodes.push({ classes: ["person"], data: { id: hq } });

    for (const fow of summary.fows) {
      if (!fkeys.has(fow.id)) {
        fkeys.add(fow.id);
        nodes.push({ classes: ["field"], data: fow });
      }

      nodes.push(toEdge(hq, fow.id));

      const capitalizedCat = fow.category.toLocaleUpperCase();
      if (!ckeys.has(capitalizedCat)) {
        ckeys.add(capitalizedCat);
        nodes.push({
          classes: ["cat"],
          data: { id: capitalizedCat, label: fow.category },
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
    selector: "node.field",
    style: {
      backgroundColor: "red",
      label: "data(label)",
    },
  },
  {
    selector: "node.person",
    style: {
      label: "data(id)",
    },
  },
  {
    selector: "node.cat",
    style: {
      backgroundColor: "orange",
      label: "data(label)",
    },
  },
];
