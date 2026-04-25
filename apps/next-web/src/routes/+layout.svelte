<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  import "../styles/app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header></Header>

<!-- eslint-disable @typescript-eslint/no-unsafe-call -->
{@render children()}

<Footer></Footer>
