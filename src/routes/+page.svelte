<script>
	export let data;
</script>

<h1 class="text-left p-6 text-3xl"><a href="/recipes" class="underline-style"> Recipes </a></h1>

{#each data.recipes as recipe}
	<h1>{recipe.name}</h1>
	<p>{recipe.description}</p>
{/each}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
