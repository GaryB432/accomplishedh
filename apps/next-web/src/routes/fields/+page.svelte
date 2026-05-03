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

  // let cy = $state<cytoscape.Core>();

  onMount(() => {
    cytoscape({
      container: cydiv,
      elements,
      style,
      layout: { name: "random" },
    });
    // const layout = cy.layout({ name: "cose" });
    // layout.run();
  });
</script>

<div id="cy" class="graph" bind:this={cydiv}></div>

<style>
  #cy {
    width: 90vw;
    height: 60vh;
    /* position: absolute; */
    top: calc(var(--header-h) + 1em);
    left: 0;
    border: thin solid silver;
  }
</style>
