import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";
import React from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
// import FilterSidebar from "../components/Navigation/FilterSidebar";
import { useSearchresultwithPagination } from "../hooks/useSearchresultwithPagination";
import { useParams } from "react-router-dom";
import { usePurchaseddata } from "../hooks/usePurchaseddata";
import "./SearchResultPage.css";

export const SearchResultPage = () => {
  const { recipesearchquery } = useParams();
  const { purchased } = usePurchaseddata();
  const searchquery = recipesearchquery;
  const {
    data,
    isLoading,
    error,
    isFetching,
    isPreviousData,
    page,
    handleNextPage,
    handlePreviousPage,
  } = useSearchresultwithPagination(searchquery);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <Error message={error.message} />;
  }

  return (
    <div className="searchresultpage">
      <div className="searchresultscontainer">
        <div className="searchresultscontainerheader">
          {data?.count === 0 ? (
            <h2>No recipe found for {recipesearchquery}</h2>
          ) : (
            <h2>{`Search Results : ${searchquery}`}</h2>
          )}
        </div>
        <div className="searchresultscontainermiddle">
          {data?.hits?.map(function (hit, index) {
            return (
              <RecipeCard
                data={hit.recipe}
                key={hit.recipe.uri}
                id={hit.recipe.uri}
                purchaseddata={purchased || []}
              />
            );
          })}
        </div>
        <div className="searchresultscontainerfooter">
          <div className="pagination_buttons_container">
            <button
              className="pagination__button"
              onClick={handlePreviousPage}
              disabled={page === 0}
            >
              Prev
            </button>

            <p className="pagination__text">
              Page {page + 1} of {Math.ceil(data.count / 20)}
            </p>

            <button
              className="pagination__button"
              onClick={handleNextPage}
              disabled={isPreviousData || !data._links?.next?.href}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <div className="searchresultscontainersidebar">
        <FilterSidebar />
      </div> */}
    </div>
  );
};
