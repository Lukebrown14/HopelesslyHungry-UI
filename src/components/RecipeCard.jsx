import { Link } from "react-router-dom";

const RecipeCard = ({ recipeTitle, recipeDes }) => {
  return (
    <div className="card bg-base-100 image-full w-72 shadow-xl cursor-pointer">
      <figure>
        <img
          src="https://www.inspiredtaste.net/37475/homemade-chicken-noodle-soup-item/"
          alt={recipeTitle}
        />
      </figure>
      <div className="card-body">
        <Link to="/item" state={recipeTitle}>
          <h2 className="card-title">{recipeTitle}</h2>
          <p>{recipeDes}</p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
