<script lang="ts">
  import { resolve } from "$app/paths";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<nav>
  <a href={resolve("/")}>home</a>
  <a href={resolve("/about")}>about</a>
</nav>

<style>
  nav {
    margin: 0.5rem 0;
  }
</style>
