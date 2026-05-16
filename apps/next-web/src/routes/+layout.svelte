<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../styles/main.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app-shell">
  <div class="top-nav">
    <Header />
  </div>

  <main>
    <!-- eslint-disable-next-line @typescript-eslint/no-unsafe-call -->
    {@render children()}
  </main>

  <Footer />
</div>

<style>
  .app-shell {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .top-nav {
    position: sticky;
    top: 0;
    z-index: 50;
  }

  main {
    flex: 1;
    padding: 1rem 1.25rem;
  }
</style>
