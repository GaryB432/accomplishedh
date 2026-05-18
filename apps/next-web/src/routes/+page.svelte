<script lang="ts">
  import { resolve } from "$app/paths";
  import CardSplash from "./CardSplash.svelte";

  let { data } = $props();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let { featureds } = $derived(data);

  const today = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(new Date());
</script>

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
    <!-- eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -->
    {#if featureds.length}
      <CardSplash fellas={featureds} />
    {:else}
      <div class="empty-state">
        <h2>Check back soon</h2>
        <p>The next daily six is being assembled.</p>
      </div>
    {/if}
  </section>
  <a href={resolve("/fields")}>fields</a>
</div>

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
