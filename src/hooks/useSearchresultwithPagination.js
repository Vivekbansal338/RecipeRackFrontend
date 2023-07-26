import { useState, useEffect } from "react";
import { getSearchQuery } from "../services/searchquery";
import { useQuery } from "@tanstack/react-query";

export function useSearchresultwithPagination(searchquery) {
  const [page, setPage] = useState(0);
  const [nextPagelink, setNextPagelink] = useState(0);
  const {
    isLoading,
    error,
    data,
    isFetching,
    isPreviousData,
    refetch: executeSearchQuery,
  } = useQuery({
    queryKey: [searchquery, page],
    queryFn: () => getSearchQuery(searchquery, nextPagelink),
    keepPreviousData: true,
    enabled: false,
    staleTime: 300000, // Set a reasonable value for staleTime (e.g., 5 minutes)
    cacheTime: 300000, // Set the maximum cache time (e.g., 5 minutes)
  });
  // only for header search button clicked
  useEffect(() => {
    setNextPagelink(0);
    setPage(0);
    if (searchquery.length === 0) {
      return;
    }
    executeSearchQuery();
  }, [searchquery, executeSearchQuery]);

  // when next button clicked
  useEffect(() => {
    executeSearchQuery();
  }, [nextPagelink, executeSearchQuery]);

  const handleNextPage = (e) => {
    e.preventDefault();
    console.log("clicked next button");
    if (!isPreviousData && data?._links?.next?.href) {
      console.log("================");
      setNextPagelink(data?._links.next.href);
      setPage((old) => old + 1);
    }
  };

  const handlePreviousPage = (e) => {
    e.preventDefault();
    console.log("clicked previous button");
    setPage((old) => Math.max(old - 1, 0));
  };

  return {
    data,
    isLoading,
    error,
    isFetching,
    isPreviousData,
    page,
    handleNextPage,
    handlePreviousPage,
  };
}
