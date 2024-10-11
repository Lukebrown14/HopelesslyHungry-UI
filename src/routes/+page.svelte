<script>
	import Card from '$lib/componets/Card.svelte';
	export let data;
</script>

<h1 class="text-left p-6 text-3xl"><a href="/recipes" class="underline-style"> Recipes </a></h1>

<div class="flex space-x-5 pl-6">
	{#each data.recipes as recipe}
		<Card name={recipe.name} description={recipe.description} />
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
