<script lang="ts">
  import DataSources from "$lib/components/DataSources.svelte";
  import ExtensionPromo from "$lib/components/ExtensionPromo.svelte";
  import FeaturedSplash from "$lib/components/FeaturedSplash.svelte";
  import FollowUs from "$lib/components/FollowUs.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let featured = $derived(data.ro.humans ?? []);
</script>

<svelte:head>
  <title>Human Accomplishment</title>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@AccomplishedH" />
  <meta name="twitter:creator" content="@AccomplishedH" />
  <meta property="og:url" content="https://humanaccomplishment.com" />
  <meta name="og:type" content="website" />
  <meta property="og:title" content="Human Accomplishment" />
  <meta
    property="og:description"
    content="Bringing you the world's most Accomplished Humans"
  />
  <meta
    property="og:image"
    content="https://humanaccomplishment.com/HA%20science.2400x2400.jpeg"
  />
</svelte:head>

<section>
  <p>
    We center the most extraordinary and accomplished people throughout history.
  </p>
  <FeaturedSplash {featured}></FeaturedSplash>
  <p class="sources">
    The data is sourced from
    <a
      href="https://osf.io/z9cnk/"
      rel="external nofollow noopener noreferrer"
      target="_blank"
      >Charles Murray's
      <b>Human Accomplishment database</b></a
    >
    available by the
    <a
      href="https://osf.io"
      rel="external nofollow noopener noreferrer"
      target="_blank">Open Science Framework</a
    >
    and from
    <a
      href="https://en.wikipedia.org/wiki/Main_Page"
      rel="external nofollow noopener noreferrer"
      target="_blank">Wikipedia</a
    >, the Free Encyclopedia.
  </p>
  <div class="bottom">
    <ExtensionPromo></ExtensionPromo>
    <FollowUs></FollowUs>
    <DataSources></DataSources>
  </div>
</section>

<style>
  section {
    margin: 1em 0;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  b {
    font-weight: 700;
  }
  p {
    margin: 1em auto;
  }
  p.sources {
    font-size: 0.8rem;
  }

  .bottom {
    margin: 1em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: 1200px) {
    section {
      margin: 1em 15vw;
    }
  }
</style>
