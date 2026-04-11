<script lang="ts">
  import { fromDictionary } from "$lib/wikibase/utils.js";

  import FeaturedToday from "../FeaturedToday.svelte";
  import Headshot from "../Headshot.svelte";
  import LifeSpan from "../LifeSpan.svelte";

  let { data } = $props();

  let { featureds, subject } = $derived(data);

  let subjectLabel = $derived(fromDictionary(subject.labels));
</script>

<h1>{subjectLabel}</h1>

<FeaturedToday {featureds}></FeaturedToday>
<Headshot></Headshot>
<LifeSpan></LifeSpan>

<style>
  h1 {
    all: unset;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
  }
</style>
