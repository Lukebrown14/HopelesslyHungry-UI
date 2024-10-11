<script>
	export let name;
	export let description;

	const slugName = name.toLowerCase().replace(' ', '-');
</script>

<div class="bg-zinc-500 p-5">
	<a href="/recipe/{slugName}">
		<h1 class="text-xl">{name}</h1>
		<p>{description}</p>
	</a>
</div>
