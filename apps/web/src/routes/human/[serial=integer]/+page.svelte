<script lang="ts">
  import { browser } from "$app/environment";
  import { applyAction, enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import Era from "$lib/components/Era.svelte";
  import ExtensionPromo from "$lib/components/ExtensionPromo.svelte";
  import FollowUs from "$lib/components/FollowUs.svelte";
  import Inventory from "$lib/components/Inventory.svelte";
  import NobelPrize from "$lib/components/NobelPrize.svelte";
  import PortraitComponent from "$lib/components/Portrait.svelte";
  import PostLengthChecker from "$lib/components/PostLengthChecker.svelte";
  import PropsBox from "$lib/components/PropsBox.svelte";
  import Share from "$lib/components/Share.svelte";
  import { flags } from "$lib/states/flags.svelte";
  import type { Property } from "@accomplishedh/shared";
  import {
    getPortraitFromClaim,
    WIKIDATA_PERSON_PROPERTIES as P,
    type Entity,
  } from "@accomplishedh/wikibase";
  import { imageSearchUrl, ogImage, socialMediaDescription } from "../helpers";
  import ReasonatorLink from "../ReasonatorLink.svelte";
  import WikibasePanel from "../WikibasePanel.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let osfProps: Property[] = $derived(
    ["adultbasic", "era"]
      .map<Property>((propName, seq) => {
        const h = data.human as unknown as Record<string, string>;
        const value = h[propName];
        return { name: propName, value, seq, source: "osf" };
      })
      .filter((f) => f.value !== void 0)
  );

  let kfbox: HTMLInputElement | undefined = $state();

  let {
    adultbasic,
    adultregion,
    death,
    dob,
    era,
    id,
    inventory,
    knownFor,
    name,
    nobel,
    osfName,
    portrait,
    props: humanProps,
    serial,
    yob,
  } = $derived(data.human);

  let showAdminPanel = $state(data.admin);

  let wikihref = $derived(
    `//en.wikipedia.org/wiki?curid=${data.human.sr!.pageid}`
  );

  let entity: Entity = $derived(
    data.human.entity
      ? { ...data.human.entity, type: "item" }
      : { id: "", type: "item" }
  );

  let cleanProps = $derived(
    humanProps.map((p) => {
      let { source } = p;
      source = source ?? "wikimedia";
      return { ...p, source };
    })
  );

  let derivedProps = $derived(
    [...cleanProps, ...osfProps].sort((a, b) => a.name.localeCompare(b.name))
  );

  let title = $derived(`Human Accomplishment: ${name}`);
  let url = $derived(page.url.href);
  let text = $derived(knownFor);

  let description = $derived(socialMediaDescription({ name, knownFor }));
  let imgSearchHref = $derived(imageSearchUrl(data.human));

  let image = $derived(ogImage(portrait));

  let { claims } = $derived(entity);
  let imgClaims = $derived(claims ? claims[P.IMAGE] : []);

  let portraitsPromise = $derived(
    Promise.all(
      browser && imgClaims
        ? imgClaims.map(async (claim) => {
            return await getPortraitFromClaim(claim, fetch);
          })
        : []
    )
  );

  let dialog: HTMLDialogElement | null = $state(null);

  function isClean(text: string): boolean {
    return !text.includes("[");
  }
  function doClean(text: string): string {
    const footnoteRegex = /\s*\[\d+\]/g;
    return text.replaceAll(footnoteRegex, "").trim();
  }
</script>

<svelte:window
  onkeydown={(event) => {
    if (event.ctrlKey && event.code === "KeyA" && showAdminPanel && kfbox) {
      event.preventDefault();
      kfbox.scrollTo();
      kfbox.focus();
      kfbox.select();
    }
  }}
/>

<svelte:head>
  <title>{title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@AccomplishedH" />
  <meta name="twitter:creator" content="@AccomplishedH" />
  <meta property="twitter:description" content={description} />
  <meta property="og:url" content={page.url.href} />
  <meta name="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
</svelte:head>

<div class="wrapper">
  <div class="header">
    <div class="hn">{name}</div>
    <div class="re">
      <ReasonatorLink {entity}></ReasonatorLink>
    </div>
  </div>
  <div class="sidebar">
    <PortraitComponent {portrait}></PortraitComponent>
    {#if flags.wikibaseFeatures}
      {#await portraitsPromise}
        <span>coming up</span>
      {:then portraits}
        {#each portraits.filter((b) => !!b) as portrait (portrait!.id)}
          <PortraitComponent {portrait}></PortraitComponent>
        {/each}
      {/await}
    {/if}
    <Inventory {inventory}></Inventory>
    <Era {era}></Era>
    <section class="featured-vp">
      <section class="head">
        <img src="/icons/trumpet-svgrepo-com.svg" alt="trumpet" />
        <h3>Featured Today</h3>
      </section>
      <section class="featured">
        {#if data.featured.length === 0}
          <div class="none-today">none</div>
        {/if}
        {#each data.featured as f (f.id)}
          <a data-sveltekit-reload href={resolve("/human/[serial=integer]", f)}>
            {f.name}
          </a>
          <div>
            {Array.isArray(f.inventory) ? f.inventory.join(", ") : f.inventory}
          </div>
        {/each}
      </section>
    </section>
  </div>
  <div class="sidebar2">
    {#if browser && "share" in navigator}
      <Share {text} {title} {url}></Share>
    {/if}
    <FollowUs></FollowUs>
    <ExtensionPromo></ExtensionPromo>
  </div>
  <div class="content">
    <div class="known-for">{knownFor}</div>
    <button
      class="link try-new"
      onclick={() => {
        flags.wikibaseFeatures = !flags.wikibaseFeatures;
      }}
    >
      {flags.wikibaseFeatures
        ? "Bale out of Wikidata integration until it is fully-baked"
        : "Try something alpha!"}
    </button>
    {#if nobel && nobel.laureate}
      <div class="laureate">
        {#each nobel.laureate.prizes as prize (prize.url)}
          <NobelPrize {prize}></NobelPrize>
        {/each}
      </div>
    {/if}
    <div class="see-also">
      <h3>For much more information, also see</h3>
      <ul>
        <li>
          <a
            href={wikihref}
            rel="external nofollow noopener noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 20 20">
              <title>From: Wikipedia</title>
              <path
                d="M11.14 4H14a.69.69 0 0 1 0 .65c-1 .16-1.36.91-1.81 1.83l-1.4 2.75 2.35 5.21h.07l3.52-8.1c.44-1.07.4-1.59-.79-1.7a.68.68 0 0 1 0-.65h3.45a.68.68 0 0 1 0 .65c-1.21.16-1.42.91-1.81 1.83l-4.37 10.08c-.13.3-.24.45-.44.45s-.33-.16-.42-.45l-2.48-5.73-2.72 5.73c-.11.3-.24.45-.44.45s-.31-.16-.42-.45l-4-10.09c-.57-1.4-.6-1.7-1.65-1.8A.68.68 0 0 1 .62 4h3.91a.68.68 0 0 1 0 .65c-1.16.13-1.21.45-.74 1.58l3.41 8.19h.05L9.3 10 7.78 6.45C7.17 5.05 7 4.77 6.24 4.66a.69.69 0 0 1 0-.65h3.32a.68.68 0 0 1 0 .65c-.74.12-.7.45-.19 1.58l.87 2 .08.09 1-2c.57-1.14.64-1.58-.15-1.7a.69.69 0 0 1-.03-.63z"
              />
            </svg>
            <div>
              <h3>Wikipedia Article</h3>
              <span>({data.human.sr!.title})</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    {#if flags.wikibaseFeatures}
      {#if entity}
        <WikibasePanel entity={{ ...entity, type: "item" }}></WikibasePanel>
      {/if}
    {:else}
      <PropsBox propz={derivedProps}></PropsBox>
    {/if}
  </div>

  <div class="footer"></div>
</div>

{#if data.admin && showAdminPanel}
  <dialog bind:this={dialog}>
    <form>
      <p>This feature is not available</p>
      <button
        type="submit"
        aria-label="close"
        formmethod="dialog"
        formnovalidate
      >
        &times;
      </button>
    </form>
  </dialog>

  <div class="adm"><a href={resolve("/admin")}>Admin</a></div>
  <form
    action={serial}
    method="post"
    use:enhance={() => {
      // prevent default callback from resetting the form
      return async ({ result }) => {
        if (result.type === "success") {
          await invalidateAll();
        }
        await applyAction(result);
      };
    }}
  >
    <label for="f-adultbasic">adultbasic</label>
    <input name="adultbasic" id="f-adultbasic" bind:value={adultbasic} />
    <label for="f-adultregion">adultregion</label>
    <input name="adultregion" id="f-adultregion" bind:value={adultregion} />
    <label for="f-death">death</label>
    <input name="death" id="f-death" bind:value={death} />
    <label for="f-dob">dob</label>
    <input name="dob" id="f-dob" bind:value={dob} />
    <label for="f-era">era</label>
    <select name="era" id="f-era" bind:value={era}>
      <option value="1200-1400">1200-1400</option>
      <option value="1400-1600">1400-1600</option>
      <option value="1600-1800">1600-1800</option>
      <option value="1800+">1800+</option>
    </select>
    <label for="f-inventory">inventory</label>
    {#if Array.isArray(inventory)}
      <div>[object] {inventory.length}</div>
    {:else}
      <select name="inventory" id="f-inventory" bind:value={inventory}>
        <option value="Art.West">Art.West</option>
        <option value="Lit.West">Lit.West</option>
        <option value="Music.West">Music.West</option>
        <option value="Science">Science</option>
      </select>
    {/if}
    <label for="f-knownFor">knownFor</label>
    <input
      name="knownFor"
      id="f-knownFor"
      bind:this={kfbox}
      bind:value={knownFor}
    />
    <label for="f-name">name</label>
    <input name="name" id="f-name" bind:value={name} />
    <label for="f-osfName">osfName</label>
    <input name="osfName" id="f-osfName" bind:value={osfName} />
    <div>portrait</div>
    <div class="portrait-info">
      <div>
        [object] &hellip;{(decodeURIComponent(portrait.img.src) ?? "?").slice(
          -20
        )}
      </div>
      <div>
        <a href={imgSearchHref} target="_blank">
          <span>Google Image Search</span>
          <svg
            role="graphics-symbol"
            stroke-width="2"
            fill="none"
            id="external-link"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6">
            </path>
            <path d="M15 3h6v6"></path>
            <path d="M10 14L21 3"></path>
          </svg>
        </a>
      </div>
    </div>
    <div>props</div>
    <div>[object] {humanProps.length}</div>
    <label for="f-yob">yob</label>
    <input name="yob" id="f-yob" bind:value={yob} />
    <input name="id" id="f-id" bind:value={id} hidden />
    <input name="serial" id="f-serial" bind:value={serial} hidden />
    <div class="kfok">
      <PostLengthChecker text={knownFor}></PostLengthChecker>
      <button
        class="footnotes plain"
        class:bracks={!isClean(knownFor)}
        onclick={(e) => {
          e.preventDefault();
          knownFor = doClean(knownFor);
        }}
      >
        &RightUpDownVector;&LeftUpDownVector;
      </button>
      <button
        type="button"
        onclick={() => {
          dialog!.showModal();
        }}>UPDATE</button
      >
      <button
        type="button"
        aria-label="close"
        onclick={(e) => {
          showAdminPanel = false;
        }}>&times;</button
      >
    </div>
    <div>
      {id}
    </div>
  </form>
{/if}

<style>
  svg[role="graphics-symbol"] {
    width: 1em;
  }

  .hn,
  h3 {
    font-weight: bold;
  }

  .hn {
    font-size: 2em;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1em;
    grid-area: sidebar;
    max-width: 300px;
  }

  .sidebar2 {
    grid-area: sidebar2;
  }

  button.link {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    cursor: default;
    display: inline;
    font: inherit;
    line-height: inherit;
    padding: 0;
    text-align: inherit;
    width: fit-content;
    &:hover {
      text-decoration: underline;
    }
  }

  button.try-new {
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    grid-area: content;
  }

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    display: grid;
    gap: 1em;
    grid-template-areas:
      "header"
      "content"
      "sidebar2"
      "sidebar"
      "footer";
  }

  .laureate {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 0.2em;
    margin: 0 0.5em;
  }

  dialog {
    form {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .wrapper {
      padding: 1em;
      grid-template-columns: min-content auto;
      grid-template-areas:
        "header   header"
        "sidebar  content"
        "sidebar2 sidebar2"
        "footer   footer";
    }
    .sidebar2 {
      align-items: center;
    }
  }
  @media screen and (min-width: 1024px) {
    .wrapper {
      padding: 1em;
      grid-template-columns: min-content auto 245px;
      grid-template-areas:
        "header  header  header"
        "sidebar content sidebar2"
        "footer  footer  footer";
    }
    .sidebar2 {
      align-items: flex-end;
      justify-content: space-around;
    }
  }

  .featured-vp {
    border: 3px solid var(--primary-color);
    .head {
      background-color: var(--secondary-color);
      padding: 0.5em;
      display: flex;
      align-items: center;
      gap: 1em;
      h3 {
        font-size: 1.2em;
      }
    }
    img {
      width: 3em;
    }
  }

  .featured {
    display: grid;
    padding: 1em;
    grid-template-columns: minmax(0, 1fr) auto;
    a {
      display: block;
    }
    a,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
    }
    * {
      padding: 0.3em 0;
    }
  }

  .kfok {
    display: flex;
    align-items: center;
    align-content: space-between;
    gap: 0.25rem;
  }

  button.footnotes {
    padding: 0 0.5em;
    background-color: rgb(139, 247, 85);
    &.bracks {
      background-color: rgb(246, 58, 58);
    }
  }

  .known-for {
    border: thin solid var(--primary-color);
    padding: 0.5em;
    font-size: 1.2em;
  }

  .see-also {
    padding: 0.5em;
    background-color: var(--secondary-color);
    font-size: 1.5em;
  }
  .see-also ul {
    display: block;
  }
  .see-also ul li {
    display: flex;
  }
  .see-also ul li a {
    display: flex;
    gap: 0.2em;
    padding: 1em;
    background-color: var(--background-color);
    color: var(--text-color);
    border: 3px solid var(--primary-color);
    align-items: center;
    text-decoration: none;
    height: 3em;
  }
  .see-also ul li a:hover {
    border-color: transparent;
  }
  .see-also svg {
    height: 2em;
  }

  .sidebar2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.5em;
    gap: 1em;
  }

  form,
  div.adm {
    margin: 1em;
  }

  .portrait-info {
    display: flex;
    gap: 1rem;
  }

  form {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    justify-items: start;
    align-items: baseline;
  }

  #f-adultbasic,
  #f-adultregion,
  #f-death,
  #f-knownFor,
  #f-name,
  #f-osfName,
  #f-serial {
    width: unset;
  }

  #f-dob,
  #f-era,
  #f-inventory,
  #f-yob {
    width: 13ch;
  }

  #f-knownFor {
    margin: 1em 0;
    width: 100%;
    border: 2px solid var(--primary-color);
  }
</style>
