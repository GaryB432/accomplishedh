<script lang="ts">
  import { WIKIDATA_PERSON_PROPERTIES as p } from "@accomplishedh/wikibase";
  import type { Entity } from "@accomplishedh/wikibase/types";

  let { subject }: { subject: Entity } = $props();

  let props_of_interest = new Set([
    p.DATE_OF_BIRTH,
    p.DATE_OF_DEATH,
    p.PLACE_OF_BIRTH,
    p.PLACE_OF_BIRTH,
    p.PLACE_OF_DEATH,
    p.PLACE_OF_DEATH,
  ]);

  let my_props = $derived(
    new Set(
      subject
        ? Object.keys(subject.claims ?? {}).toSorted(
            (a, b) => numberPart(a) - numberPart(b),
          )
        : [],
    ),
  );

  // let info = $derived({ birth: {}, death: {} });

  let lifespan_properties = $derived(
    new Set(props_of_interest).intersection(new Set(my_props)),
  );

  function numberPart(propKey: string): number {
    return propKey.startsWith("P") ? parseInt(propKey.slice(1), 10) : NaN;
  }

  // let description = $derived(fromDictionary(subject.descriptions));  let message = $state("coming soon you bet");
</script>

<article>
  {lifespan_properties.size}
</article>

<style>
  article {
    --some-color: rgba(0, 0, 0, 0.2);
    box-shadow:
      0 2px 2px 0 var(--some-color),
      0 12px 22px 0 var(--some-color);
    max-width: 30ch;
    outline: 1px solid var(--some-color);
    overflow: hidden;
    padding: 0.5em;
    text-align: center;
  }
</style>
