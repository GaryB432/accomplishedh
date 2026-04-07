<script lang="ts">
  import FeaturedToday from "./human/FeaturedToday.svelte";

  let { data } = $props();
  // console.log(JSON.stringify(data.featureds));
  let featureds = $derived(data.featureds);
</script>

<main>
  <div class="container">
    <h1>Responsive Controls</h1>
    <p style="margin-bottom: 2rem">
      This middle section scrolls vertically. The header and footer stay pinned.
    </p>

    <div class="card" style="background: var(--secondary)">
      <h3>Form Example</h3>
      <p>Inputs and buttons are sized for thumbs.</p>
      <input type="text" placeholder="Enter your name..." />
      <button class="btn">Submit Action</button>
    </div>

    <div class="grid-cols">
      <div class="card">
      <h2>this component does not belong on the home page</h2>
        <FeaturedToday {featureds}></FeaturedToday>
      </div>
      <div class="card">
        <h3>Feature A</h3>
        <p>This stacks on mobile and grids on desktop.</p>
      </div>
    </div>

    <!-- Spacer to demonstrate scrolling -->
    <div
      style="
            height: 50vh;
            background: linear-gradient(
              to bottom,
              var(--tertiary),
              transparent
            );
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
    >
      <p>Scroll down for more...</p>
    </div>
  </div>
</main>
