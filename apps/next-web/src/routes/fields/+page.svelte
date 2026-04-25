<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let humanFowConnections = $derived(
    Object.entries(data.fieldsOfWork.people)
      .map(([human, h]) => {
        return h.fows.map((fow) => ({ ...fow, human }));
      })
      .flat(),
  );

  type Human = {
    class: "human";
    name: string;
  };

  type Field = {
    class: "field";
    name: string;
  };

  type Point = Field | Human;

  let graph = $derived(
    humanFowConnections.reduce(
      (a, hfc) => {
        const hPoint = { class: "human" as const, name: hfc.human };
        const fowPoint = { class: "field" as const, name: hfc.id };
        a.points.add(hPoint);
        a.points.add(fowPoint);
        a.edges.add({ from: hPoint, to: fowPoint });

        return a;
      },
      { edges: new Set(), points: new Set() } as {
        edges: Set<{ from: Point; to: Point }>;
        points: Set<Point>;
      },
    ),
  );
</script>

<div class="graph">
  <div class="points">
    {#each graph.points as point (point.name)}
      <div
        class={[
          "point",
          { fow: point.class === "field", human: point.class === "human" },
        ]}
      >
        {point.name}
      </div>
    {/each}
  </div>
  <div class="edges">
    {#each graph.edges as edge (edge.from.name
      .concat("!")
      .concat(edge.to.name))}
      <div class={["edge"]}>
        <div>
          {edge.from.name}
        </div>
        <div>
          {edge.to.name}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .point {
    border: thin solid lime;
  }
  .edges {
    display: flex;
  }
  .edge {
    background-color: red;
  }

  .human {
    border: thin solid blue;
  }
  .fow {
    border: thin solid orange;
  }
</style>
