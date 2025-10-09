<script lang="ts">
  import { page } from '$app/state';
  import ExtensionPromo from '$lib/components/ExtensionPromo.svelte';
  const image = 'https://pbs.twimg.com/media/FjQPuXoXEAARryR?format=png';
  const description =
    'Featuring inspiring people every day from  Science, Literature, Art and Music. The free browser extension brings them front and center wherever you are with just a click.';
  const title = 'Human Accomplishment Browser Extension';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@AccomplishedH" />
  <meta name="twitter:creator" content="@AccomplishedH" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="og:type" content="website" />
  <meta name="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:title" content={title} />
</svelte:head>

<article class="a">
  <img src={image} alt="promo" />
  <p>
    We feature several inspiring individuals from the history of Science,
    Literature, Art and Music every day.
  </p>
  <p>Our free browser extension brings them to you with just a click.</p>
  <p>We respect your privacy and collect absolutely no browsing activity.</p>
  <ExtensionPromo></ExtensionPromo>
</article>

<style>
  article.a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    padding: 1em;
  }
  img {
    width: 500px;
    box-shadow: var(--shadow-15);
  }
  p {
    font-size: 2em;
    /* max-width: 45ch; */
    text-align: center;
  }
</style>
