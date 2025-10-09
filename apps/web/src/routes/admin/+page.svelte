<script lang="ts">
  import { resolve } from "$app/paths";
  import Era from "$lib/components/Era.svelte";
  import IndefCheck from "$lib/components/IndefCheck.svelte";
  import Inventory from "$lib/components/Inventory.svelte";
  import LowFeaturedsWarning from "$lib/components/LowFeaturedsWarning.svelte";
  import PostLengthChecker from "$lib/components/PostLengthChecker.svelte";
  import {
    daysFromNow,
    type EuroHuman,
    type FeaturedHuman,
  } from "@accomplishedh/shared";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import WikibasePanel from "./WikibasePanel.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let timelineChartHost: HTMLElement | undefined = $state();
  let pieChartHost: HTMLElement | undefined = $state();
  let inventoryChartHost: HTMLElement | undefined = $state();

  let featured = $derived(data.featured);
  let today = $derived(new Date(Date.parse(data.todayISO)));

  let pieWidth = $state(0);
  let timelineWidth = $state(1000);

  let selected: Partial<EuroHuman> = $state({ name: "no one" });

  let dayMap = $derived(
    featured.reduce<Record<string, FeaturedHuman[]>>((a, b) => {
      if (a[b.stamp]) {
        a[b.stamp].push(b);
      } else {
        a[b.stamp] = [b];
      }
      return a;
    }, {})
  );

  let fmap = $derived(
    featured.reduce<Record<string, number>>((a, b: FeaturedHuman) => {
      if (b.human.era) {
        a[b.human.era] = (a[b.human.era] ?? 0) + 1;
      }
      return a;
    }, {})
  );

  let imap = $derived(
    featured.reduce<Record<string, number>>((a, b: FeaturedHuman) => {
      if (b.human.inventory) {
        for (const inv of Array.isArray(b.human.inventory)
          ? b.human.inventory
          : [b.human.inventory]) {
          a[inv] = (a[inv] ?? 0) + 1;
        }
      }
      return a;
    }, {})
  );

  function daysFromNowLabel(day: string) {
    const days = daysFromNow(day, today);
    return days === 1 ? `1 day` : `${days} days`;
  }

  onMount(async () => {
    const fwh = featured.filter(
      (e) => e.human.death && e.human.death !== "" && e.human.yob != ""
    );
    const featuredTimeline: [string, string, Date, Date][] = fwh.map((e) => [
      Array.isArray(e.human.inventory)
        ? e.human.inventory[0]
        : (e.human.inventory ?? "tbd"),
      e.human.name ?? "nope",
      new Date(`${e.human.yob}-${e.human.dob}`),
      new Date(e.human.death ? e.human.death.slice(0, 10) : 0),
    ]);
    // selected = fwh[0].human;

    const eraData: [string, string | number][] = [
      ["Era", "Humans"],
      ...Object.entries(fmap).sort((a, b) => a[0].localeCompare(b[0])),
    ];

    const inventoryData: [string, string | number][] = [
      ["Inventory", "Humans"],
      ...Object.entries(imap).sort((a, b) => a[0].localeCompare(b[0])),
    ];

    const startCharts = () => {
      void google.charts.load("current", {
        packages: ["corechart", "timeline"],
      });
      google.charts.setOnLoadCallback(() => {
        const timelineTable = new google.visualization.DataTable();
        timelineTable.addColumn({ type: "string", id: "Inventory" });
        timelineTable.addColumn({ type: "string", id: "Human" });
        timelineTable.addColumn({ type: "date", id: "Born" });
        timelineTable.addColumn({ type: "date", id: "Died" });
        const timelineChart = new google.visualization.Timeline(
          timelineChartHost!
        );
        google.visualization.events.addListener(timelineChart, "select", () => {
          const row = timelineChart.getSelection()[0].row;
          selected = row ? fwh[row].human : {};
        });

        const timelineOptions: google.visualization.TimelineOptions = {
          height: 1000,
          width: timelineWidth - 40,
          timeline: { singleColor: "rgb(31, 186, 186)" },
        };
        timelineTable.addRows(featuredTimeline);
        timelineChart.draw(timelineTable, timelineOptions);

        const baseChartOptions: google.visualization.PieChartOptions = {
          width: pieWidth,
          height: pieWidth,
          legend: { position: "left" },
          pieHole: 0.5,
        };

        const eraChart = new google.visualization.PieChart(pieChartHost!);
        eraChart.draw(
          new google.visualization.DataView(
            google.visualization.arrayToDataTable(eraData)
          ),
          {
            ...baseChartOptions,
            title: "Featureds by Era",
          }
        );

        const inventoryChart = new google.visualization.PieChart(
          inventoryChartHost!
        );
        inventoryChart.draw(
          new google.visualization.DataView(
            google.visualization.arrayToDataTable(inventoryData)
          ),
          {
            ...baseChartOptions,
            title: "Featureds by Inventory",
          }
        );
      });
    };
    setTimeout(() => startCharts(), 100);
  });

  const dtf = Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
  });
</script>

<svelte:head>
  <title>Admin</title>
  <script src="//www.gstatic.com/charts/loader.js"></script>
</svelte:head>
<section class="main-body">
  <section class="dayfeatures">
    <h1>Upcoming Features</h1>
    <LowFeaturedsWarning dayCount={Object.keys(dayMap).length}
    ></LowFeaturedsWarning>
    {#each Object.keys(dayMap) as day (day)}
      <h2>
        {dtf.format(new Date(day))}
      </h2>
      <div class="ago">
        {daysFromNowLabel(day)}
      </div>
      {#each dayMap[day] as featuredOne (featuredOne.id)}
        <article class:selected={featuredOne.human.id === selected.id}>
          <div>
            <a
              target="edm"
              href={resolve("/human/[serial=integer]", featuredOne.human)}
            >
              {featuredOne.human.name}
            </a>
          </div>
          <div class="inventory">
            <Inventory
              inventory={featuredOne.human.inventory ?? "none"}
            ></Inventory>
          </div>
          <div class="era">
            <Era era={featuredOne.human.era ?? "none"}></Era>
          </div>
          <div class="prizes">
            {#if featuredOne.human.nobel && featuredOne.human.nobel.laureate}
              {#each featuredOne.human.nobel.laureate.prizes as prize (prize.url)}
                <img
                  src="/Nobel_Prize.png"
                  title="The Nobel Prize in {prize.category} ({prize.year})"
                  alt="{prize.category} {prize.year}"
                />
              {/each}
            {/if}
          </div>
          <div class="wb">
            <WikibasePanel entity={featuredOne.human.entity}></WikibasePanel>
          </div>
          <div class="kf">
            <IndefCheck message={featuredOne.human.knownFor}></IndefCheck>
            <PostLengthChecker text={featuredOne.human.knownFor ?? ""}
            ></PostLengthChecker>
          </div>
        </article>
      {/each}
    {/each}
    <form class="cacher" method="post">
      <h1>Clear Caches</h1>
      <button>CLEAR</button>
    </form>
  </section>
  <div class="pies">
    <div bind:clientWidth={pieWidth} bind:this={pieChartHost}></div>
    <div bind:this={inventoryChartHost}></div>
  </div>
  <div
    class="timeline-host"
    bind:this={timelineChartHost}
    bind:clientWidth={timelineWidth}
  ></div>
</section>

<style>
  .pies {
    grid-area: pies;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > div {
      background-color: gray;
      width: 85vw;
    }
  }
  .timeline-host {
    grid-area: timeline;
  }

  .cacher {
    display: flex;
    flex-direction: column;
    width: fit-content;
    border: thin solid var(--primary-color);
    padding: 1em;
    h1 {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    .pies {
      flex-direction: row;
      > div {
        width: 45vw;
      }
    }
  }

  .main-body {
    display: grid;
    grid-template-areas:
      "dayFeatureds"
      "pies"
      "timeline";
  }

  @media (min-width: 1400px) {
    .main-body {
      grid-template-columns: 1fr 600px;
      grid-template-rows: fit-content(100px) 1fr;
      gap: 1em;
      grid-template-areas:
        "dayFeatureds pies"
        "dayFeatureds timeline";
    }
  }

  h1 {
    font-weight: bold;
    font-size: 2em;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5em;
  }
  .ago {
    font-weight: bold;
  }
  .dayfeatures {
    grid-area: dayFeatureds;
    margin: 0 1em;
  }
  article {
    display: grid;
    grid-template-columns: 2fr 1fr 0.8fr 50px 30px 5fr;
    align-items: center;
  }

  article.selected {
    background: var(--primary-color);
  }

  .wb {
    border: thin solid silver;
    text-align: center;
  }

  .inventory {
    border: thin solid silver;
  }
  .prizes {
    display: flex;
    justify-content: center;
  }
  .prizes img {
    width: 1.5em;
  }
  .kf {
    padding: 1ch;
  }
</style>
