import Loading from "../components/Shared/Loading";
import React, { useEffect } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import "./FavouritesPage.css";
import { useSelector } from "react-redux";

export const FavouritesPage = () => {
  const bookmarkeddata = useSelector((state) => state.bookmarkdata.results);
  return (
    <div className="favouritiescontainer">
      <div className="favouritiescontainerheader">
        <h1>My favourite </h1>
      </div>
      <div className="favouritiescontainermiddle">
        {bookmarkeddata.map(function (recipe, index) {
          return <RecipeCard data={recipe} key={recipe.uri} id={recipe.uri} />;
        })}
      </div>
    </div>
  );
};
