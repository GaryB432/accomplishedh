<script lang="ts">
  import { fromDictionary } from "$lib/wikibase/utils.js";

  import FeaturedToday from "../FeaturedToday.svelte";
  import LifeSpan from "../LifeSpan.svelte";

  let { data } = $props();

  let { featureds, subject } = $derived(data);

  let subjectLabel = $derived(fromDictionary(subject.labels));

  // console.log(wikibaseProperties);
</script>

<main>
  <div class="container">
    <h1>{subjectLabel}</h1>
    <LifeSpan></LifeSpan>
    <FeaturedToday {featureds}></FeaturedToday>
  </div>
</main>
