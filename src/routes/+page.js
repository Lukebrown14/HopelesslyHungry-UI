export async function load({ fetch }) {
	const response = await fetch('http://localhost:8080/recipes/favorite-recipe');
	const data = await response.json();
	const recipes = data.recipes;

	return {
		recipes
	};
}
