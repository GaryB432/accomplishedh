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

  //       animate?: boolean;
  //       // duration of animation in ms if enabled
  //       animationDuration?: number;
  //       // easing of animation if enabled
  //       animationEasing?: Css.TransitionTimingFunction;
  //       /**
  //        * a function that determines whether the node should be animated.
  //        * All nodes animated by default on animate enabled.
  //        * Non-animated nodes are positioned immediately when the layout starts
  //        */
  //       animateFilter?(node: NodeSingular, index: number): boolean;

  // Object.values(layouts).forEach((l: AnimatedLayoutOptions)=> ({...l, anim }))

  let entityPopover = $state<HTMLDivElement>();
  let hoverAnchor = $state<HTMLDivElement>();
  let hoveredPersonId = $state<string>();
  let draggingPersonId = $state<string>();

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

  const placeAnchorAtNode = (node: NodeSingular) => {
    if (!hoverAnchor || !cydiv) return;
    const pos = node.renderedPosition();
    const rect = cydiv.getBoundingClientRect();
    hoverAnchor.style.left = `${rect.left + pos.x}px`;
    hoverAnchor.style.top = `${rect.top + pos.y}px`;
  };

  onMount(() => {
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: layouts[selectedLayoutName],
    });
    cy.on("mouseover", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      hoveredPersonId = node.id();
      selectedQid = node.id();
      if (entityPopover && draggingPersonId !== node.id()) {
        placeAnchorAtNode(node);
        entityPopover.showPopover();
      }
    });
    cy.on("mouseout", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      if (hoveredPersonId === node.id()) hoveredPersonId = undefined;
      entityPopover?.hidePopover();
    });

    cy.on("grab", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      draggingPersonId = node.id();
      entityPopover?.hidePopover();
    });

    cy.on("free", "node.person", (evt) => {
      const node = evt.target as NodeSingular;
      const nodeId = node.id();
      draggingPersonId = undefined;

      if (hoveredPersonId === nodeId && entityPopover) {
        selectedQid = nodeId;
        placeAnchorAtNode(node);
        entityPopover.showPopover();
      }
    });
  });
</script>

<section class="main">
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <div bind:this={hoverAnchor} class="hover-anchor" aria-hidden="true"></div>
  <div>
    <div class="buttons">
      <select
        name="lsel"
        bind:value={selectedLayoutName}
        onchange={() => {
          cy?.layout(layouts[selectedLayoutName]).run();
        }}
      >
        {#each Object.keys(layouts) as lopts (lopts)}
          <option value={lopts}>{lopts}</option>
        {/each}
      </select>
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
    width: 90vw;
    height: 60vh;
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
