<script lang="ts">
  import { browser } from "$app/environment";
  import { resolve } from "$app/paths";
  import { shuffle, type EuroHuman } from "@accomplishedh/shared";
  import Era from "./Era.svelte";
  import Inventory from "./Inventory.svelte";
  import NoFeaturedsToday from "./NoFeaturedsToday.svelte";

  interface Props {
    featured: EuroHuman[];
  }
  let { featured = $bindable() }: Props = $props();

  let anyFeatureds = $derived(featured.length !== 0);

  let open = $state(false);

  function dob(h: EuroHuman): string {
    return Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(`${h.yob}-${h.dob}`));
  }

  if (browser) {
    setTimeout(() => (open = true), 100);
  }
</script>

{#if anyFeatureds}
  <div class="featuredSplash" class:open>
    <section class="head">
      <img src="/icons/trumpet-svgrepo-com.svg" alt="trumpet" />
      <h3>Featured Today</h3>
      <button
        class="plain"
        onclick={() => {
          open = false;
          featured = shuffle(featured);
          setTimeout(() => {
            open = true;
          }, 10);
        }}
      >
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="40" height="40" viewBox="0 0 24 24">
          <g>
            <path
              d="M8.7,14.2C8,14.7,7.1,15,6.2,15H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.2c1.3,0,2.6-0.4,3.7-1.2c0.4-0.3,0.5-1,0.2-1.4C9.7,13.9,9.1,13.8,8.7,14.2z"
            />
            <path
              d="M13,10.7c0.3,0,0.6-0.1,0.8-0.3C14.5,9.5,15.6,9,16.8,9h0.8l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L17.6,7h-0.8c-1.8,0-3.4,0.8-4.6,2.1c-0.4,0.4-0.3,1,0.1,1.4C12.5,10.7,12.8,10.7,13,10.7z"
            />
            <path
              d="M20.7,15.3l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l0.3,0.3h-1.5c-1.6,0-2.9-0.9-3.6-2.3l-1.2-2.4C10.3,8.3,8.2,7,5.9,7H4C3.4,7,3,7.4,3,8s0.4,1,1,1h1.9c1.6,0,2.9,0.9,3.6,2.3l1.2,2.4c1,2.1,3.1,3.4,5.4,3.4h1.5l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2C21.1,16.3,21.1,15.7,20.7,15.3z"
            />
          </g>
        </svg>
      </button>
    </section>
  </div>
  <ul>
    {#each featured as human, i (human.id)}
      <li style="--animation-order:{i}" class:open>
        <a href={resolve("/human/[serial=integer]", human)}>
          <div class="top">
            <h1>
              {human.name}
            </h1>
            <div class="prizes">
              {#if human.nobel && human.nobel.laureate}
                {#each human.nobel.laureate.prizes as prize (prize.category.concat(prize.year))}
                  <img
                    src="/Nobel_Prize.png"
                    title="The Nobel Prize in {prize.category} ({prize.year})"
                    alt="{prize.category} {prize.year}"
                  />
                {/each}
              {/if}
            </div>
          </div>
          <div class="body">
            <div class="left">
              <p>Born: {human.dob ? dob(human) : "unknown"}</p>
              <Inventory inventory={human.inventory}></Inventory>
            </div>
            <div class="right">
              <div class="kf">
                {human.knownFor}
              </div>
              <div class="more-link note">
                <span> more&hellip; </span>
                <svg
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Era era={human.era}></Era>
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <NoFeaturedsToday></NoFeaturedsToday>
{/if}

<style>
  .featuredSplash {
    border: 3px solid var(--primary-color);
    visibility: hidden;
    margin: 1em auto;
  }
  .featuredSplash.open {
    visibility: visible;
    animation-name: zoomer;
    animation-duration: 700ms;
  }
  .featuredSplash .head {
    background-color: var(--secondary-color);
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
  }
  .featuredSplash .head h3 {
    flex-grow: 1;
    font-size: 1.2em;
  }
  .featuredSplash img {
    width: 3em;
  }
  .featuredSplash .head button svg {
    width: 2em;
  }
  @keyframes zoomer {
    from {
      transform: scale(0.6);
    }
    25% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
  ul li {
    opacity: 0;
    border-radius: 5px;
    margin: 0 10px;
    display: block;
    text-decoration: none;
    overflow: hidden;
    color: var(--text-color);
    padding: 1em;
    box-shadow: var(--shadow-15);
  }
  ul li.open {
    animation-name: animateIn;
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 100ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
  }
  ul li .top {
    display: flex;
    justify-content: space-between;
  }
  ul li .top .prizes img {
    height: 2em;
  }
  ul li .body {
    display: flex;
    gap: 0.5em;
    align-items: top;
    justify-content: space-between;
  }
  ul li .body .right {
    font-size: 0.6em;
    margin: 0.5em;
  }
  ul li .body .right .kf {
    background-color: var(--kf-bg-color);
    line-height: 1rem;
    padding: 0.2rem;
  }
  ul li .body .right .note svg {
    margin: 0 0.5em;
    height: 1em;
  }
  ul li a {
    display: block;
    text-decoration: none;
    color: var(--text-color);
  }
  ul li h1,
  ul li p {
    margin-bottom: 0.6em;
  }
  ul li h1 {
    font-size: 1.3em;
    font-weight: bold;
  }
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px) translateX(-20px);
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (min-width: 992px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
