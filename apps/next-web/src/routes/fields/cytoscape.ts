import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";
import type { EdgeDefinition, NodeDefinition } from "cytoscape";

export function greet(name: string): string {
  return `cytoscape says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};
export function createElements(
  recordByPerson: Record<PersonQid, FieldsOfWorkSummaryV1>,
): Array<NodeDefinition | EdgeDefinition> {
  return [
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

    { data: { source: "Q333", target: "Q433773", id: "" } },
    { data: { source: "Q333", target: "Q364505", id: "" } },
    { data: { source: "Q12483", target: "Q200397", id: "" } },
    { data: { source: "Q333", target: "Q187258", id: "" } },
    { data: { source: "Q333", target: "Q81130", id: "" } },
    { data: { source: "Q8242", target: "Q245355", id: "" } },
    { data: { source: "Q4", target: "Q247603", id: "" } },
  ];
}
