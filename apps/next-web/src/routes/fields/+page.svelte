<script lang="ts">
  import { apiRequestConfig } from "$lib/wikibase/urls";
  import { fromDictionary } from "$lib/wikibase/utils";
  import {
    entities_get_url,
    type WikibaseResponse,
  } from "@accomplishedh/wikibase";
  import { onMount } from "svelte";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let fowqs = $derived(
    [...data.fieldsOfWork.keys()].toSorted(
      (a, b) => data.fieldsOfWork.get(b)! - data.fieldsOfWork.get(a)!,
    ),
  );

  let u = $derived(
    entities_get_url({ ids: fowqs.slice(0, 50), props: ["labels"] }), // TODO stop silently skipping!
  );

  let wikibaseResponsePromise = $state<Promise<WikibaseResponse>>();

  onMount(() => {
    console.log(u);
    wikibaseResponsePromise = fetch(u, apiRequestConfig).then(
      (r) => r.json() as Promise<WikibaseResponse>,
    );
  });
</script>

<main>
  <div class="container">
    <h1>Some Fields Of Work Remarks</h1>

    {#await wikibaseResponsePromise}
      hold on tight for fows
    {:then possiblySuccessful}
      {@const fows =
        possiblySuccessful && possiblySuccessful.success === 1
          ? Object.values(possiblySuccessful.entities ?? {})
          : []}

      <section>
        {#each Object.values(fows) as fow (fow.id)}
          <div>
            {fow.id}
          </div>
          <div>
            {fromDictionary(fow.labels)}
          </div>
          <div>
            {data.fieldsOfWork.get(fow.id)}
          </div>
        {/each}
      </section>
    {/await}
  </div>
</main>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
