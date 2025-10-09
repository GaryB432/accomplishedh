<script lang="ts">
  import { onMount } from 'svelte';

  interface ExtensionInfo {
    brand?: string;
    browser: string;
    storeUrl?: string;
  }

  const infos: ExtensionInfo[] = [
    { browser: 'firefox' },
    {
      browser: 'chrome',
      storeUrl:
        'https://chrome.google.com/webstore/detail/human-accomplishment/meaaaeangcmbemianlihbkoldlhfijfa',
      brand: 'Google Chrome',
    },
    { browser: 'opera' },
    {
      browser: 'edge',
      storeUrl:
        'https://microsoftedge.microsoft.com/addons/detail/human-accomplishment/hnaklphmmbjfbjlmdjnogiiclomigepl',
      brand: 'Microsoft Edge',
    },
  ];

  let activeInfo: ExtensionInfo | undefined = $state();
  let mobile = $state(true);

  onMount(() => {
    if (navigator.userAgentData) {
      mobile = navigator.userAgentData.mobile;
      for (const b of navigator.userAgentData.brands) {
        for (const i of infos) {
          if (i.brand === b.brand) {
            activeInfo = i;
            break;
          }
        }
      }
    }
  });
</script>

{#if !mobile}
  <div class="extension-promo-vp">
    <h3>1+ Users</h3>
    <div>
      {#if activeInfo && activeInfo.storeUrl}
        <a
          class="install"
          target="_blank"
          rel="noreferrer"
          href={activeInfo.storeUrl}
          >Get the Free Extension
        </a>
      {:else}
        <div class="unknown-ua">Get the Free Extension</div>
      {/if}
      <ul>
        {#each infos.filter((info) => info.storeUrl) as info (info.browser)}
          <li>
            <a class="install-icon" href={info.storeUrl ?? '#'}>
              <img
                alt="Install"
                class:available={info.storeUrl}
                src={`/extension/browser/${info.browser}_64x64.png`}
                title={info.storeUrl ? 'Store Listing' : 'Coming Soon'}
              />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<style>
  :root {
    --other-green: rgb(76, 174, 76);
    --white: rgb(255, 255, 255);
  }

  .extension-promo-vp {
    display: none;
    align-items: center;
    flex-direction: column;
  }
  a.install,
  .unknown-ua {
    background: var(--greenish);
    border-radius: 6px;
    border: 1px solid var(--other-green);
    display: block;
    font-size: 1.25em;
    padding: 10px 16px;
    text-align: center;
    text-decoration: none;
  }

  a.install-icon {
    img {
      width: 44px;
      height: 44px;
      filter: grayscale(1);
      &.available {
        filter: grayscale(0);
      }
    }
  }

  h3 {
    font-size: 1.5em;
  }
  ul {
    display: flex;
    margin: 0.5em 0;
    padding: 0.5em 0;
    justify-content: space-evenly;
    border-top: 2px solid silver;
    border-bottom: 2px solid silver;
  }
  li {
    --padding: 6px;
    --size: calc(44px + calc(var(--padding) * 2));
    padding: var(--padding);
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background: none;
  }
  li:hover {
    background: rgba(223, 218, 218, 0.842);
  }

  @media screen and (min-width: 768px) {
    .extension-promo-vp {
      display: flex;
    }
  }
</style>
