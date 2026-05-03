<script lang="ts">
  import cytoscape, { type StylesheetJson } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { elements } = $derived(data);

  let cydiv = $state<HTMLDivElement>();

  const style: StylesheetJson = [
    {
      selector: "node",
      style: {
        shape: "hexagon",
        "background-color": "red",
        label: "data(id)",
      },
    },
  ];

  let cy = $state<cytoscape.Core>();

  onMount(() => {
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: { name: "random" },
    });
    // const layout = cy.layout({ name: "cose" });
    // layout.run();
  });
</script>

<section class="main">
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <div>
    <div class="buttons">
      <button
        onclick={() => {
          cy?.layout({ name: "breadthfirst" }).run();
        }}>Draw</button
      >
    </div>
  </div>
</section>

<style>
  .main {
    display: grid;
    grid-template-columns: 1fr 20vw;
    border: thin solid lime;
  }

  #cy {
    width: 90vw;
    height: 60vh;
    border: thin solid silver;
  }
</style>
