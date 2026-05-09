<script lang="ts">
  import cytoscape, {
    type LayoutOptions,
    type NodeSingular,
    type StylesheetJson,
  } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { elements } = $derived(data);

  let cydiv = $state<HTMLDivElement>();

  const layouts: Record<string, LayoutOptions> = {
    breadthfirst: { name: "breadthfirst" },
    circle: { name: "circle" },
    concentric: { name: "concentric" },
    cose: { name: "cose" },
    grid: { name: "grid" },
    none: { name: "null" },
    preset: { name: "preset" },
    random: { name: "random" },
  };

  let entityPopover = $state<HTMLDivElement>();
  let hoverAnchor = $state<HTMLDivElement>();
  let selectedPersonId = $state<string>();

  let selectedLayoutName = $state<string>("none");

  let selectedQid = $state<string>();

  let selectedWikidataUrl = $derived<string>(
    `https://www.wikidata.org/wiki/${selectedQid}`,
  );

  const style: StylesheetJson = [
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

  let cy = $state<cytoscape.Core>();

  onMount(() => {
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: layouts[selectedLayoutName],
    });
    cy.on("mouseover", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      selectedQid = node.id();
    });

    cy.on("tap", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      selectedPersonId = node.id();
    });
  });
</script>

<section class="main">
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <div bind:this={hoverAnchor} class="hover-anchor" aria-hidden="true"></div>
  <div>
    <div>
      <div class="buttons"></div>
    </div>
  </div>
</section>
<div
  bind:this={entityPopover}
  id="my-tooltip"
  popover="hint"
  style="position-anchor: --current-anchor;"
>
  <p>
    This is a <strong>rich tooltip</strong> with a
    <a href={selectedWikidataUrl}>link</a>.
  </p>
</div>

<style>
  .main {
    display: grid;
    grid-template-columns: 1fr 20vw;
    border: thin solid lime;
  }

  #cy {
    width: 60vw;
    aspect-ratio: 9 / 6;
    border: thin solid silver;
  }

  .hover-anchor {
    position: fixed;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
    anchor-name: --current-anchor;
    opacity: 0;
  }

  #my-tooltip {
    inset: 0;
    position-area: top;
    user-select: none;
    -webkit-user-select: none;
  }
</style>
