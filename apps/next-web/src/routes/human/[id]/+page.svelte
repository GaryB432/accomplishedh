<script lang="ts">
  import PersonSidebar from "$lib/components/PersonSidebar.svelte";
  import { fromDictionary } from "$lib/wikibase/utils.js";

  import EntityDescription from "../EntityDescription.svelte";
  import FeaturedToday from "../FeaturedToday.svelte";
  import Headshot from "../Headshot.svelte";
  import LifeSpan from "../LifeSpan.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let { featureds, subject } = $derived(data);

  let subjectLabel = $derived(fromDictionary(subject.labels));
</script>

<main>
  <div class="container">
    <h1>{subjectLabel}</h1>
    <EntityDescription {subject} />
    <div class="mid">
      <div class="left">
        <PersonSidebar qid={subject.id} />
      </div>

      <Headshot {subject} />
    </div>
    <LifeSpan />
    <FeaturedToday {featureds} />
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
  .mid {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .mid .left {
    display: flex;
  }
</style>
