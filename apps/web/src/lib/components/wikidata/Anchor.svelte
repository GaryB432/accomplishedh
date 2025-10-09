<script lang="ts">
  interface Props {
    text: string;
    wbid: string;
  }

  let { wbid, text }: Props = $props();

  let href = $derived(`https://www.wikidata.org/wiki/Property:${wbid}`);
  let title = $derived(`Wikidata ${wbid}`);
</script>

<a {href} {title}>
  {text}
</a>
