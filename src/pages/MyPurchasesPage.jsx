import React, { useEffect } from "react";
import "./MyPurchasesPage.css";
import { usePurchaseddata } from "../hooks/usePurchaseddata";
import { useQueries } from "@tanstack/react-query";
import { getRecipeDetailQuery } from "../services/searchquery";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Loading from "../components/Shared/Loading";

export const MyPurchasesPage = () => {
  const { purchased } = usePurchaseddata();
  const purchasedrecipesid = purchased?.data?.purchases || [];
  const recipepurchasedQueries = useQueries({
    queries: purchasedrecipesid.map((recipeid) => {
      return {
        queryKey: ["recipepurchased", recipeid],
        queryFn: () => getRecipeDetailQuery(recipeid),
      };
    }),
    refetchOnWindowFocus: true,
    enabled: window.document.hasFocus(),
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div className="mypurchasepage">
      <div className="mypurchasepageheader">
        <h1>My Purchases</h1>
      </div>
      <div className="mypurchasepagemiddle">
        {recipepurchasedQueries?.map(function (hit, index) {
          if (hit?.isFetching) {
            return <Loading />;
          }

          return (
            <RecipeCard
              data={hit?.data?.recipe}
              key={hit?.data?.recipe?.uri}
              id={hit?.data?.recipe?.uri}
              purchaseddata={purchased || []}
            />
          );
        })}
      </div>
      <div className="mypurchasepagefooter"></div>
    </div>
  );
};
