<script lang="ts">
  import cytoscape, {
    type AnimatedLayoutOptions,
    type LayoutOptions,
    type NodeSingular,
  } from "cytoscape";
  import dagre, { type DagreLayoutOptions } from "cytoscape-dagre";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import { style } from "./cytoscape";
  import PersonSidebar from "./PersonSidebar.svelte";

  let { data }: PageProps = $props();
  let { elements } = $derived(data);

  let cydiv = $state<HTMLDivElement>();

  const layouts: Record<string, LayoutOptions | DagreLayoutOptions> = {
    breadthfirst: { name: "breadthfirst" },
    circle: { name: "circle" },
    concentric: { name: "concentric" },
    cose: { name: "cose" },
    dagre: { name: "dagre" },
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
  // let hoveredPersonId = $state<string>();
  let selectedPersonId = $state<string>();

  let selectedLayoutName = $state<string>("dagre");

  let selectedWikidataUrl = $derived<string>(
    `https://www.wikidata.org/wiki/${selectedPersonId}`,
  );

  let cy = $state<cytoscape.Core>();

  const placeAnchorAtNode = (node: NodeSingular) => {
    if (!hoverAnchor || !cydiv) return;
    const pos = node.renderedPosition();
    const rect = cydiv.getBoundingClientRect();
    hoverAnchor.style.left = `${rect.left + pos.x}px`;
    hoverAnchor.style.top = `${rect.top + pos.y}px`;
  };

  onMount(() => {
    cytoscape.use(dagre);
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: layouts[selectedLayoutName],
    });

    const lo: DagreLayoutOptions = {
      name: "dagre",
      animate: false,
      fit: false,
    };

    cy.nodes(".person").style("display", "none");

    cy.layout(lo).run();

    cy.on("tap", "node.field", (evt) => {
      const node = evt.target as NodeSingular;
      const weHidden = node.outgoers().hidden();
      node
        .outgoers(".person")
        .nodes()
        .style("display", weHidden ? "element" : "none");
      const m = node.scratch("dagre");
      console.log(m);

      cy?.layout(lo).run();

      // .forEach((n) => console.log(n.visible()));
      // console.log(node);
    });

    // cy.on("free", "node.person", (evt) => {
    //   const node = evt.target as NodeSingular;
    //   const nodeId = node.id();
    //   // draggingPersonId = undefined;

    //   if (hoveredPersonId === nodeId && entityPopover) {
    //     selectedPersonId = nodeId;
    //     placeAnchorAtNode(node);
    //     entityPopover.showPopover();
    //   }
    // });
  });
</script>

<div bind:this={hoverAnchor} class="hover-anchor" aria-hidden="true"></div>
<section class="main">
  <div id="cy" class="graph" bind:this={cydiv}></div>

  <div>
    <PersonSidebar></PersonSidebar>
    <div>
      <div class="buttons">
        <select
          name="lsel"
          bind:value={selectedLayoutName}
          onchange={() => {
            const ll: LayoutOptions & AnimatedLayoutOptions = {
              ...layouts[selectedLayoutName],
              animate: true,
            };
            cy?.layout(ll).run();
          }}
        >
          {#each Object.keys(layouts) as lopts (lopts)}
            <option value={lopts}>{lopts}</option>
          {/each}
        </select>
      </div>
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
    width: 80vw;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    border: thin solid lime;
  }

  #cy {
    /* width: 60vw; */
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
