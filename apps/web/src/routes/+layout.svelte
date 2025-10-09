<script lang="ts">
  import { version } from "$app/environment";
  import { resolve } from "$app/paths";
  import Header from "$lib/components/Header.svelte";
  import type { Snippet } from "svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  interface Props {
    children?: Snippet;
    data: LayoutData;
  }

  let { data, children }: Props = $props();

  let { admin, theme: gr, vercelEnv } = $derived(data);
  let theme: "dark" | "light" = $derived(gr === "dark" ? "dark" : "light");
</script>

<svelte:head>
  <title>Human Accomplishment</title>
</svelte:head>

<Header {admin} {theme} {vercelEnv}></Header>

<main>
  {@render children?.()}
</main>

<footer>
  <span>Made with &#10084; #humanaccomplishment</span>
  <a href={resolve("/privacy")}>Privacy</a>
  <span>{version}</span>
</footer>

<style>
  footer {
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-size: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    height: 2em;
    padding-bottom: 1em;
  }
</style>
