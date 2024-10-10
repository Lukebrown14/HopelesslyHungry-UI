import NavBar from "../components/navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Recipe = () => {
  const location = useLocation();
  const name = location.state;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/recipes/${name.toLowerCase().replace(" ", "-")}`,
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, [name]);

  return (
    <div>
      <NavBar />
      <h1>{recipes.name}</h1>
      <h2>Cook Time {recipes.cookTime}</h2>
      <p>instructions {recipes.instructions}</p>
    </div>
  );
};

export default Recipe;
