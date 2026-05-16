<script lang="ts">
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

<section>
  <h1>{subjectLabel}</h1>
  <EntityDescription {subject}></EntityDescription>
  <Headshot {subject}></Headshot>
  <LifeSpan {subject}></LifeSpan>
  <FeaturedToday {featureds}></FeaturedToday>
</section>
