// RecipeDetails.jsx
import React from "react";
import "./RecipeSummary.css";

function RecipeSummary({
  yield: yields,
  dietLabels,
  calories,
  totalWeight,
  cuisineType,
  mealType,
  dishType,
}) {
  return (
    <div className="recipe-details-summary">
      <h3>Details</h3>

      {yields && (
        <div className="detail-summary">
          <strong>Yield:</strong>
          <span>{yields} servings</span>
        </div>
      )}

      {cuisineType.length > 0 && (
        <div className="detail-summary">
          <strong>Cuisine:</strong>
          <span> {cuisineType[0]}</span>
        </div>
      )}

      {mealType.length > 0 && (
        <div className="detail-summary">
          <strong>Meal:</strong>
          <span>{mealType[0]}</span>
        </div>
      )}

      {dishType.length > 0 && (
        <div className="detail-summary">
          <strong>Dish:</strong>
          <span>{dishType[0]}</span>
        </div>
      )}

      {calories && (
        <div className="detail-summary">
          <strong>Calories:</strong>
          <span>{calories.toFixed(2)}</span>
        </div>
      )}

      {totalWeight && (
        <div className="detail-summary">
          <strong>Weight:</strong>
          <span>{totalWeight.toFixed(2)} g</span>
        </div>
      )}

      {dietLabels.length > 0 && (
        <div className="detail-summary">
          <strong>Diet:</strong>
          <span>{dietLabels[0]}</span>
        </div>
      )}
    </div>
  );
}

export default RecipeSummary;
