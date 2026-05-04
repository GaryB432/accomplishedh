import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";
import type { EdgeDefinition, NodeDefinition } from "cytoscape";

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

  return [
    ...nodes,
    //   .toSorted((a, b) => {
    //     const aid = a.data.id ?? "";
    //     const bid = b.data.id ?? "";
    //     return aid.localeCompare(bid);
    //   }

    // ),
  ];
}

export function toEdge(source: string, target: string): EdgeDefinition {
  return { data: { source, target, id: source.concat("→").concat(target) } };
}

const smoll = [
  {
    data: { id: "Q333", category: "Science", label: "astronomy" },
    classes: ["field"],
  },
  {
    data: { id: "Q12483", category: "Science", label: "statistics" },
    classes: ["field"],
  },
  {
    data: { id: "Q8242", category: "Lit", label: "literature" },
    classes: ["field"],
  },
  {
    data: { id: "Q4", category: "Science", label: "engineering" },
    classes: ["field"],
  },
  { data: { id: "Q433773" }, classes: ["person"] },
  { data: { id: "Q364505" }, classes: ["person"] },
  { data: { id: "Q200397" }, classes: ["person"] },
  { data: { id: "Q187258" }, classes: ["person"] },
  { data: { id: "Q81130" }, classes: ["person"] },
  { data: { id: "Q245355" }, classes: ["person"] },
  { data: { id: "Q247603" }, classes: ["person"] },
  { data: { source: "Q333", target: "Q433773", id: "Q333^Q433773" } },
  { data: { source: "Q333", target: "Q364505", id: "Q333^Q364505" } },
  {
    data: { source: "Q12483", target: "Q200397", id: "Q12483^Q200397" },
  },
  { data: { source: "Q333", target: "Q187258", id: "Q333^Q187258" } },
  { data: { source: "Q333", target: "Q81130", id: "Q333^Q81130" } },
  { data: { source: "Q8242", target: "Q245355", id: "Q8242^Q245355" } },
  { data: { source: "Q4", target: "Q247603", id: "Q4^Q247603" } },
];
