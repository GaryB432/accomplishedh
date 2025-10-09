<script lang="ts">
  import DataSources from '$lib/components/DataSources.svelte';
  import ExtensionPromo from '$lib/components/ExtensionPromo.svelte';
  import JsonDataLogo from '$lib/components/JsonDataLogo.svelte';
  import VenvStamp from '$lib/components/VenvStamp.svelte';
  import type { PageData } from '../$types';
  import MusicWiki from './MusicWiki.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="content">
  <p>
    Human Accomplishment is a showcase for extraordinary people throughout
    history. The data is sourced from
    <a
      href="https://osf.io/z9cnk/"
      target="_blank"
      rel="external nofollow noopener noreferrer"
      >Charles Murray's Human Accomplishment database</a
    >
    available by the
    <a
      href="https://osf.io"
      rel="external nofollow noopener noreferrer"
      target="_blank">Open Science Framework</a
    >. This website is unrelated to but inspired by
    <a
      href="https://www.amazon.com/Human-Accomplishment-Pursuit-Excellence-Sciences/dp/0060929642"
      rel="external nofollow nooperner noreferrer"
      target="_blank">Mr. Murray's book of the same name</a
    >.
  </p>
  <p>
    Be sure to follow our
    <a
      href="https://x.com/AccomplishedH"
      target="_blank"
      rel="external nofollow noopener noreferrer"
      ><span>
        <svg width="14" height="14" viewBox="0 0 1200 1227">
          <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          />
        </svg>
        account
      </span>
    </a>
    which posts periodically about a sample of our accomplished humans.
  </p>
  <section class="mid">
    <div>
      <img class="profile" src="/SVG/profile.svg" alt="profile" />
    </div>
    <div>
      <JsonDataLogo></JsonDataLogo>
    </div>
    <div>
      <ExtensionPromo></ExtensionPromo>
    </div>
    <div>
      <DataSources></DataSources>
    </div>
  </section>
  <MusicWiki></MusicWiki>
</div>

<section class="footer">
  <VenvStamp {...data.vercelEnv}></VenvStamp>
</section>

<style>
  .content {
    margin: 3em;
  }
  p {
    margin-bottom: 1.5em;
  }
  .profile {
    border: thin solid #c2c2c2;
  }

  .mid {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    place-items: center;
    gap: 1em;
  }

  .footer {
    margin: 1em auto;
    display: flex;
    justify-content: center;
    gap: 1ch;
  }

  img.profile {
    max-width: 300px;
    box-shadow: var(--shadow-15);
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .mid {
      flex-direction: row;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>
