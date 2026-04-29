<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { graph } = $derived(data);
</script>

<div class="graph">
  <div class="points">
    {#each graph.nodes as point (point.id)}
      <div
        class={[
          "point",
          { fow: point.type === "field", human: point.type === "person" },
        ]}
      >
        {point.id}
      </div>
    {/each}
  </div>
  <div class="edges">
    {#each graph.edges as edge (edge[0].id.concat("!").concat(edge[1].id))}
      <div class={["edge"]}>
        <div>
          {edge[0].id}
        </div>
        <div>
          {edge[1].id}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  div {
    font-size: 6px;
    display: inline-block;
    margin: 2px;
    padding: 2px;
  }
  .point {
    border: thin solid lime;
  }
  .edges {
    padding: 1em;
    display: flex;
  }
  .edge {
    background-color: red;
    border: 3px solid yellow;
  }

  .human {
    border: 2px solid blue;
  }
  .fow {
    border: thin solid orange;
  }
</style>
