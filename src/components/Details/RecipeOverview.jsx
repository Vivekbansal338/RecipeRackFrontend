// RecipeCard.jsx

import "./RecipeOverview.css";

function RecipeOverview({ label, image, source, url }) {
  return (
    <div className="recipeoverviewcontainer">
      <img className="hero_recipe_detail_img" src={image} alt={label} />
    </div>
  );
}

export default RecipeOverview;
