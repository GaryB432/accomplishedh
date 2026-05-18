<script lang="ts">
  import Headshot from "$lib/components/Headshot.svelte";
  import { fromDictionary } from "$lib/wikibase/utils.js";
  import EntityDescription from "../EntityDescription.svelte";
  import FeaturedToday from "../FeaturedToday.svelte";
  import LifeSpan from "../LifeSpan.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let { featureds, subject } = $derived(data);

  let subjectLabel = $derived(fromDictionary(subject.labels));
</script>

<section>
  <h1>{subjectLabel}</h1>
  <EntityDescription {subject} />
  <div class="mid">
    <div>
      <Headshot {subject} />
      <FeaturedToday {featureds} />
    </div>
    <div>
      <LifeSpan {subject} />
    </div>
  </div>
</section>

<style>
  section {
    padding: 0 3rem;
  }
  .mid {
    display: flex;
  }
</style>
