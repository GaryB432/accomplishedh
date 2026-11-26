<script lang="ts">
  import Headshot from "$lib/components/Headshot.svelte";
  import SimpleClaimsPanel from "$lib/components/PersonSimpleClaims.svelte";
  import ToggleButton from "$lib/components/ToggleButton.svelte";
  import { fetchEntities } from "$lib/wikibase/api";
  import { firstAndOnly } from "@accomplishedh/shared";
  import type { Item } from "@accomplishedh/wikibase/types";
  import cytoscape, { type NodeSingular } from "cytoscape";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import { style } from "./cytoscape";

  let devmode = $state(false);

  const PADDING = 24;

  let { data }: PageProps = $props();

  let cy = $state<cytoscape.Core>();

  let elements = $derived(devmode ? data.elements.slice(0, 50) : data.elements);

  let shell = $state<HTMLElement>();
  let cydiv = $state<HTMLDivElement>();

  let selectedQid = $state<string>();

  let selectedSubject = $derived<Promise<Item | undefined>>(
    selectedQid
      ? fetchEntities(
          globalThis.fetch,
          [selectedQid],
          ["claims", "labels"],
        ).then((entities) => firstAndOnly(entities))
      : Promise.resolve(undefined),
  );

  let main = $derived(shell?.closest("main"));
  let appShell = $derived(main?.closest(".app-shell"));
  let header = $derived(appShell?.querySelector(".top-nav"));
  let footer = $derived(appShell?.querySelector("footer"));

  const updateShellHeight = () => {
    if (!shell || !main || !cy) return;

    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const footerHeight = footer?.getBoundingClientRect().height ?? 0;
    const mainStyles = getComputedStyle(main);
    const mainPaddingTop = Number.parseFloat(mainStyles.paddingTop) || 0;
    const mainPaddingBottom = Number.parseFloat(mainStyles.paddingBottom) || 0;
    const availableHeight = Math.max(
      0,
      Math.floor(
        viewportHeight -
          headerHeight -
          footerHeight -
          mainPaddingTop -
          mainPaddingBottom,
      ),
    );

    shell.style.height = `${availableHeight}px`;
    cy.resize();
    cy.fit(cy.elements(":visible"), PADDING);
  };

  const runVisibleLayout = (animate = false) => {
    const graph = cy;

    if (!graph) return;

    const visibleElements = graph.elements(":visible");

    if (visibleElements.nonempty()) {
      visibleElements
        .layout({
          name: "breadthfirst",
          fit: true,
          animate,
          padding: PADDING,
          avoidOverlap: true,
        })
        .run();
    }
  };

  const showOnlyCategories = () => {
    const graph = cy;

    if (!graph) return;

    graph.batch(() => {
      graph.elements().style("display", "none");
      graph.nodes("[type = 'cat']").style("display", "element");
    });

    runVisibleLayout();
  };

  const toggleIncomingBranch = (node: NodeSingular) => {
    const graph = cy;

    if (!graph) return;

    const directBranch = node.incomers();
    const directNodes = directBranch.nodes();

    if (directNodes.empty()) return;

    const shouldOpen = directNodes.every((incomingNode) =>
      incomingNode.is(":hidden"),
    );
    const branchToHide = node.predecessors().union(directBranch);

    graph.batch(() => {
      if (shouldOpen) {
        directBranch.style("display", "element");
      } else {
        branchToHide.style("display", "none");
      }
    });

    runVisibleLayout(true);
  };

  onMount(() => {
    cy = cytoscape({
      container: cydiv,
      elements,
      style,
      layout: { name: "grid" },
    });

    showOnlyCategories();

    cy.on("tap", "node", (evt) => {
      const node = evt.target as NodeSingular;
      console.log(node.data());
    });
    cy.on("tap", "node[type='cat']", (evt) => {
      toggleIncomingBranch(evt.target as NodeSingular);
    });
    cy.on("tap", "node[type='field']", (evt) => {
      toggleIncomingBranch(evt.target as NodeSingular);
    });
    cy.on("tap", "node[type='person']", (evt) => {
      const node = evt.target as NodeSingular;
      selectedQid = node.id();
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

    updateShellHeight();

    const resizeObserver = new ResizeObserver(updateShellHeight);
    if (header) resizeObserver.observe(header);
    if (footer) resizeObserver.observe(footer);

    window.addEventListener("resize", updateShellHeight);
    window.visualViewport?.addEventListener("resize", updateShellHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateShellHeight);
      window.visualViewport?.removeEventListener("resize", updateShellHeight);
      cy?.destroy();
    };
  });
</script>

<section class="fields-shell" bind:this={shell}>
  <div id="cy" class="graph" bind:this={cydiv}></div>
  <aside class="panel" aria-label="Selected person details">
    {#await selectedSubject}
      this goes pretty fast!
    {:then subject}
      <div class="panel-content">
        {#if subject}
          <Headshot {subject} width={130}></Headshot>
        {/if}

        <!-- <SimpleClaimsPanel qid={selectedPersonId} /> -->
        <SimpleClaimsPanel claims={subject?.claims ?? {}} />
      </div>
    {/await}

    <div class="panel-controls">
      <button
        class="btn"
        onclick={() =>
          cy
            ?.elements(":visible")
            .layout({
              name: "breadthfirst",
              fit: true,
              animate: true,
              // padding: PADDING,
              avoidOverlap: true,
              // condense: true,
            })
            .run()}
      >
        redraw
      </button>
      <ToggleButton bind:checked={devmode} />
    </div>
  </aside>
</section>

<style>
  .fields-shell {
    --pane-border: rgba(0, 0, 0, 0.22);
    --shell-offset: 10rem;
    display: grid;
    grid-template-columns: minmax(0, 1fr) clamp(22rem, 28vw, 28rem);
    grid-template-rows: minmax(0, 1fr);
    width: 100%;
    height: calc(100dvh - var(--shell-offset));
    overflow-y: scroll;
    border: 1px solid var(--pane-border);
    border-radius: 0.6rem;
  }

  #cy {
    grid-column: 1;
    grid-row: 1;
    align-self: stretch;
    justify-self: stretch;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--pane-border);
  }

  .panel {
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    background: var(--bg);
  }

  .panel-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }

  .panel-controls {
    display: flex;
    border-top: 1px solid var(--pane-border);
    padding: 0.6rem 0.75rem;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 980px) {
    .fields-shell {
      --shell-offset: 8.5rem;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(20rem, 52dvh) minmax(14rem, 1fr);
      height: calc(100dvh - var(--shell-offset));
    }

    #cy {
      grid-column: 1;
      grid-row: 1;
      border-right: none;
      border-bottom: 1px solid var(--pane-border);
    }

    .panel {
      grid-column: 1;
      grid-row: 2;
    }
  }
</style>
