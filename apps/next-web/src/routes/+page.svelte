<script lang="ts">
  import type { Item } from "@accomplishedh/wikibase";

  import { resolve } from "$app/paths";
  import { fromDictionary } from "$lib/wikibase/utils";

  import { type PageProps } from "./$types.js";
  import Headshot from "./human/Headshot.svelte";

  type DailyFeatured = PageProps["data"]["featureds"][number] & { wb: Item };

  let { data }: PageProps = $props();

  let dailySix = $derived((data.featureds as DailyFeatured[]).slice(0, 6));

  const today = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(new Date());
</script>

<main>
  <div class="home-shell">
    <section class="intro" aria-labelledby="daily-six-title">
      <p class="eyebrow">{today}</p>
      <h1 id="daily-six-title">Daily Six</h1>
      <p class="lede">
        Six lives worth meeting today, gathered from the long record of human
        accomplishment.
      </p>
    </section>

    <section class="daily-six" aria-label="Today's six featured people">
      {#if dailySix.length}
        {#each dailySix as featured, index (featured.wb.id)}
          <a
            class="person-card"
            href={resolve("/human/[id]", { id: featured.wb.id })}
          >
            <span class="rank" aria-hidden="true"
              >{String(index + 1).padStart(2, "0")}</span
            >
            <span class="portrait">
              <Headshot subject={{ ...featured.wb, type: "item" }} />
            </span>
            <span class="person-copy">
              <span class="person-name">{featured.name}</span>
              {#if fromDictionary(featured.wb.descriptions)}
                <span class="person-description"
                  >{fromDictionary(featured.wb.descriptions)}</span
                >
              {/if}
            </span>
          </a>
        {/each}
      {:else}
        <div class="empty-state">
          <h2>Check back soon</h2>
          <p>The next daily six is being assembled.</p>
        </div>
      {/if}
    </section>
  </div>
</main>

<style>
  .home-shell {
    display: grid;
    gap: 1.25rem;
    margin-inline: auto;
    max-width: 1080px;
    padding-block: 0.5rem 2rem;
  }

  .intro {
    display: grid;
    gap: 0.75rem;
  }

  .eyebrow {
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0;
    margin: 0;
    text-transform: uppercase;
  }

  .lede {
    color: var(--muted);
    font-size: 1.02rem;
    line-height: 1.55;
    margin: 0;
    max-width: 34rem;
  }

  .daily-six {
    display: grid;
    gap: 0.75rem;
  }

  .person-card {
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    color: inherit;
    display: grid;
    gap: 0.85rem;
    grid-template-columns: auto 4.75rem minmax(0, 1fr);
    min-height: 6.5rem;
    overflow: hidden;
    padding: 0.75rem;
    text-decoration: none;
    transition:
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease;
  }

  .person-card:focus-visible,
  .person-card:hover {
    border-color: var(--primary);
    box-shadow: 0 12px 28px rgba(20, 34, 43, 0.12);
    transform: translateY(-1px);
  }

  .rank {
    align-self: stretch;
    color: var(--primary);
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 900;
    justify-content: center;
    width: 2rem;
  }

  .portrait {
    aspect-ratio: 1;
    background:
      linear-gradient(135deg, rgba(31, 186, 186, 0.15), transparent 58%),
      var(--tertiary);
    border: 1px solid var(--line);
    border-radius: 8px;
    display: grid;
    overflow: hidden;
    place-items: center;
  }

  .portrait :global(img) {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .person-copy {
    display: grid;
    gap: 0.35rem;
    min-width: 0;
  }

  .person-name {
    font-size: 1.03rem;
    font-weight: 900;
    line-height: 1.15;
  }

  .person-description {
    color: var(--muted);
    display: -webkit-box;
    font-size: 0.88rem;
    line-height: 1.35;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .empty-state {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 1rem;
  }

  @media (min-width: 720px) {
    .home-shell {
      gap: 2rem;
      padding-block: 2rem 3rem;
    }

    .intro {
      align-items: end;
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 0.5fr);
    }

    .lede {
      justify-self: end;
    }

    .daily-six {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1040px) {
    .daily-six {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
