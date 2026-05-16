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

<section>
  <h1>{subjectLabel}</h1>
  <EntityDescription {subject}></EntityDescription>
  <div class="mid">
    <div>
      <Headshot {subject}></Headshot>
      <FeaturedToday {featureds}></FeaturedToday>
    </div>
    <div>
      <LifeSpan {subject}></LifeSpan>
      <PersonSidebar qid={subject.id}></PersonSidebar>
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
