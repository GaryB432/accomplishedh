<script lang="ts">
  interface Props {
    dayCount?: number;
  }

  let { dayCount = 0 }: Props = $props();
  let level = $derived(
    dayCount < 5 ? 'very-low' : dayCount < 10 ? 'low' : 'normal',
  );
  let message = $derived(
    `${dayCount} ${dayCount === 1 ? 'day' : 'days'} of featured humans ${
      dayCount === 1 ? 'remains' : 'remain'
    }.`,
  );
</script>

{#if dayCount < 10}
  <div class="container {level}">
    <h1>
      {message}
    </h1>

    <p>
      See the <a
        href="https://github.com/GaryB432/accomplishedh/blob/master/docs/wiki/UpdatingFeatureds.md"
        >development wiki</a
      > for information about refreshing the list of featured humans.
    </p>
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    align-items: center;
    h1 {
      font-size: 1.5rem;
    }
    &.low,
    &.very-low {
      font-weight: bold;
    }
    &.low {
      background-color: var(--warn-yellow);
    }
    &.very-low {
      background-color: var(--alert-red);
      color: white;
    }
    p {
      font-size: 1rem;
    }
  }
</style>
