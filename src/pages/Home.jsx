import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recentRecipes, setRecentRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((response) => response.json())
      .then((data) => setRecentRecipes(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="font-serif bg-slate-200 p-4">
      <NavBar />

      <h2 className="text-stone-900 text-2xl pb-4 pl-6">Latest Recipes</h2>

      <div className="flex space-x-3 content-center">
        {recentRecipes.recipes?.map((item, i) => (
          <RecipeCard
            recipeTitle={item.name}
            recipeDes={item.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
