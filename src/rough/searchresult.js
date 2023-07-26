// import Loading from "../components/Shared/Loading";
// import React from "react";
// import { useQueryClient, useQuery } from "@tanstack/react-query";
// import RecipeCard from "../components/RecipeCard/RecipeCard";
// import Error from "../components/Shared/Error";
// import FilterSidebar from "../components/Navigation/FilterSidebar";
// import "./SearchResultPage.css";

// export const SearchResultPage = () => {
//   const queryClient = useQueryClient();
//   const { data, isFetching, error } = useQuery(
//     ["searchquery"],
//     () => {
//       const data = queryClient.getQueryData(["searchquery"]);
//       return data || [];
//     },
//     {
//       enabled: true, // Disable automatic fetching for this query
//     }
//   );

//   if (isFetching) {
//     return <Loading />;
//   }
//   if (error) {
//     return <Error message={error.message} />;
//   }
//   return (
//     <div className="searchresultpage">
//       <div className="searchresultscontainer">
//         <div className="searchresultscontainerheader">
//           {data?.count === 0 ? (
//             <h2>No results found</h2>
//           ) : (
//             <h2>{`Search Results for ${data?.q}`}</h2>
//           )}
//         </div>
//         <div className="searchresultscontainermiddle">
//           {data?.hits?.map(function (hit, index) {
//             return (
//               <RecipeCard
//                 data={hit.recipe}
//                 key={hit.recipe.uri}
//                 id={hit.recipe.uri}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <div className="searchresultscontainersidebar">
//         <FilterSidebar />
//       </div>
//     </div>
//   );
// };
