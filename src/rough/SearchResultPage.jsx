import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";
import React from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import FilterSidebar from "../components/Navigation/FilterSidebar";
import { useSelector } from "react-redux";
import { useSearchresultwithPagination } from "../hooks/useSearchresultwithPagination";
import "./SearchResultPage.css";

export const SearchResultPage = () => {
  const searchquery = useSelector((state) => state.searchinputdata.query);
  const headersearchbuttonclicked = useSelector(
    (state) => state.searchinputdata.isbuttonclicked
  );
  const {
    data,
    isLoading,
    error,
    isFetching,
    isPreviousData,
    page,
    handleNextPage,
    handlePreviousPage,
  } = useSearchresultwithPagination(searchquery, headersearchbuttonclicked);

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
            <h2>No results found</h2>
          ) : (
            <h2>{`Search Results for ${searchquery}`}</h2>
          )}
        </div>
        <div className="searchresultscontainermiddle">
          {data?.hits?.map(function (hit, index) {
            return (
              <RecipeCard
                data={hit.recipe}
                key={hit.recipe.uri}
                id={hit.recipe.uri}
              />
            );
          })}
        </div>
      </div>
      <div className="searchresultscontainersidebar">
        <div>
          <button onClick={handlePreviousPage} disabled={page === 0}>
            Previous Page
          </button>
          <span>Current Page: {page + 1}</span>
          <button
            onClick={handleNextPage}
            disabled={isPreviousData || !data?._links?.next?.href}
          >
            Next Page
          </button>
        </div>
        <FilterSidebar />
      </div>
    </div>
  );
};
