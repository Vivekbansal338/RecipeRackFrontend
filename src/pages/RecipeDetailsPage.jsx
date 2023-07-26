import React from "react";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";
import HealthLabels from "../components/Details/HealthLabels";
import Ingredients from "../components/Details/Ingredients";
import NutritionInfo from "../components/Details/NutritionInfo";
import RecipeSummary from "../components/Details/RecipeSummary";
import RecipeOverview from "../components/Details/RecipeOverview";
import { useQuery } from "@tanstack/react-query";
import { getRecipeDetailQuery } from "../services/searchquery";
import { useParams } from "react-router-dom";
import "./RecipeDetailsPage.css";

export const RecipeDetailsPage = () => {
  const { recipeid } = useParams();
  const {
    isFetching,
    data: recipedetails,
    error,
  } = useQuery({
    queryKey: [recipeid],
    queryFn: () => getRecipeDetailQuery(recipeid),
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  });

  if (isFetching) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="recipedetailspage">
      <div className="recipedetailscontainer">
        <div className="recipedetailscontainerheader">
          <h2>{recipedetails.recipe.label}</h2>
        </div>
        <div className="recipedetailscontainermiddle">
          <div className="recipedetailscontainermiddletop">
            <RecipeOverview {...recipedetails.recipe} />
            <RecipeSummary {...recipedetails.recipe} />
          </div>
          <HealthLabels labels={recipedetails.recipe.healthLabels} />
          <Ingredients ingredientLines={recipedetails.recipe.ingredientLines} />
          <NutritionInfo totalNutrients={recipedetails.recipe.totalNutrients} />
        </div>
      </div>
    </div>
  );
};
