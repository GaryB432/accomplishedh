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
<div class="llm">
  <blockquote class="twitter-tweet" data-dnt="true">
    <p lang="en" dir="ltr">
      Instead of watching an hour of Netflix, watch this 2 hour hour Stanford
      lecture will teach you more about how LLMs like ChatGPT and Claude are
      built than most people working at top AI companies learn in their entire
      careers. <a href="https://t.co/Htfn54LtDG">pic.twitter.com/Htfn54LtDG</a>
    </p>
    &mdash; AilaunchX (@Ai_Tech_tool)<a
      href="https://twitter.com/Ai_Tech_tool/status/2054595670854770933?ref_src=twsrc%5Etfw"
      >May 13, 2026</a
    >
  </blockquote>
  <script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"
  ></script>
</div>
<div class="supps">
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
      The only 5 supplements worth your money (and why each one matters):<br
      /><br />1. Vitamin D3 + K2.
    </p>
    &mdash; Leddy (@LeddyLLC)<a
      href="https://twitter.com/LeddyLLC/status/2054921528790426090?ref_src=twsrc%5Etfw"
      >May 14, 2026</a
    >
  </blockquote>
  <script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"
  ></script>
</div>

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
