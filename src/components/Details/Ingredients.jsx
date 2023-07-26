import React from "react";
import "./Ingredients.css";

function Ingredients({ ingredientLines }) {
  return (
    <div className="ingredients-container">
      <h2 className="ingredients-title">Ingredients</h2>
      <ul className="ingredients-list">
        {ingredientLines.map((ingredient, index) => (
          <li key={index} className="ingredients-item">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
