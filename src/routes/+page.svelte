<script lang="ts">
  let count = $state(0);
</script>

<svelte:head>
  <title>Svelte Template</title>
</svelte:head>

<main>
  <h1>SvelteKit is ready.</h1>
  <p>Start building your project in <code>src/routes</code>.</p>

  <button onclick={() => count++}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
</main>
