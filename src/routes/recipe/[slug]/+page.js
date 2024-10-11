export async function load({ params, fetch }) {
	const { slug } = params;

	const response = await fetch(`http://localhost:8080/recipes/chicken-soup`);

	const data = await response.json();
	console.log(data);
	return {
		data
	};

	// try {
	// 	const response = await fetch(`http://localhost:8080/recipes/chicken-soup`);

	// 	if (!response.ok) {
	// 		throw new Error(`HTTP error! status: ${response.status}`);
	// 	}

	// 	const recipe = await response.json();
	// 	console.log(recipe);
	// 	return {
	// 		recipe
	// 	};
	// } catch (error) {
	// 	console.error('Failed to fetch recipe:', error);
	// 	return {
	// 		status: 500,
	// 		error: new Error('Failed to fetch recipe')
	// 	};
	// }
}
