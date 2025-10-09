<script lang="ts">
  import type { Prize } from '$lib/types/nobel.types';

  interface Props {
    prize: Prize;
  }

  let { prize }: Props = $props();
  let url = $derived(`//nobelprize.org/${prize.url}`);
</script>

<div class="left">
  <img src="/Nobel_Prize.png" alt="Nobel Prize" />
</div>
<div class="np-vp">
  <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
  <a href={url} rel="external nofollow noopener noreferrer" target="_blank">
    <section class="info">
      The Nobel Prize in {prize.category}
      {#if prize.share && prize.share !== '1'}
        (<span>shared</span>
        <!-- credit-report-svgrepo-com.svg -->
        <svg
          fill="#000000"
          width="14"
          height="14"
          viewBox="-3.5 0 19 19"
          class="cf-icon-svg"
          ><path
            d="M11.16 16.131a.476.476 0 0 1-.476.475H1.316a.476.476 0 0 1-.475-.475V3.024a.476.476 0 0 1 .475-.475h6.95l2.893 2.893zm-1.11-9.924H8.059a.575.575 0 0 1-.574-.574V3.657H1.95v11.841h8.102zm-4.689 8.161a.55.55 0 0 0 .048-.002.554.554 0 0 0 .432-.275l3.241-5.613a.554.554 0 1 0-.96-.555L5.28 12.85l-1.305-1.566a.554.554 0 1 0-.851.71l1.813 2.176a.554.554 0 0 0 .426.2z"
          /></svg
        >)
      {/if}
      ({prize.year})
    </section>
    <section class="motivation">
      {prize.motivation}
    </section>
    <section class="more-link">more&hellip;</section>
  </a>
</div>

<style>
  a {
    display: block;
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
  }
  section {
    margin: 0.5em;
  }
  section.motivation {
    font-size: 1.1em;
  }
  .left {
    background-color: var(--primary-color);
    padding: 0.5em;
  }
  .left img {
    width: 4em;
  }
  .info {
    font-weight: 700;
    font-size: 1.2em;
    span {
      font-style: italic;
    }
    .cf-icon-svg {
      display: inline-block;
      height: 1em;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>
