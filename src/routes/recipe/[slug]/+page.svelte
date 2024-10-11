<script>
	export let data;
	const recipe = data.data;

	console.log(recipe);
</script>

<div class="p-8">
	<div id="title" class="text-center">
		<h1 class=" text-4xl">{recipe.name}</h1>
		<div class="flex justify-center space-x-2">
			<p class="underline-style text-xl"><a href="/about">{recipe.author}</a></p>
			<p class="underline-style text-xl"><a href="/category">{recipe.category}</a></p>
			<p class="text-xl"><a href="/category">{recipe.time}</a></p>
		</div>
	</div>
	<div>
		<p>{recipe.ingredients}</p>
		<p>{recipe.steps}</p>
	</div>
</div>
<!-- {
    "id": 1,

    "imageUrl": "http:localhost:5173/images/chicken-soup.png",

    "ingredients": [
        "Chicken",
        "Water",
        "Potato",
        "Salt"
    ],
    "steps": [
        "Cook Chicken",
        "Add Potato's",
        "Add Salt",
        "Add Water"
    ],
    "author": "Beth Benson",
    "time": 10
} -->
