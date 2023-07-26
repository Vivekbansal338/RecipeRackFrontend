// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { useQuery } from "@tanstack/react-query";
// import { getSearchQuery } from "../../services/searchquery";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";

// const HeaderSearch = () => {
//   const searchInputRef = useRef(null);
//   const navigate = useNavigate();

//   const {
//     isFetching,
//     data: searchResults,
//     error,
//     refetch: executeSearchQuery,
//   } = useQuery({
//     queryKey: ["searchquery"],
//     queryFn: () => getSearchQuery(searchInputRef.current.value),
//     enabled: false,
//   });

//   const handleButtonClick = (e) => {
//     console.log("clicked");
//     e.preventDefault();
//     if (searchInputRef.current.value.length === 0) {
//       return;
//     }
//     executeSearchQuery();
//     navigate("/searchresults");
//     searchInputRef.current.value = "";
//     searchInputRef.current.blur();
//   };

//   return (
//     <form className="headersearch" onSubmit={handleButtonClick}>
//       <input type="text" placeholder="Search" ref={searchInputRef} />
//       <button type="submit" className="headersearchbutton">
//         <FaSearch className="headericon" />
//       </button>
//     </form>
//   );
// };

// export default HeaderSearch;

// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { useQuery } from "@tanstack/react-query";
// import { getSearchQuery } from "../../services/searchquery";
// import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";

// const HeaderSearch = () => {
//   const searchInputRef = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(0);
//   const [nextPagelink, setNextPagelink] = useState(0);

//   const {
//     isLoading,
//     isError,
//     error,
//     data,
//     isFetching,
//     isPreviousData,
//     refetch: executeSearchQuery,
//   } = useQuery({
//     queryKey: ["searchquery", page],
//     queryFn: () =>
//       getSearchQuery(searchInputRef.current.value, nextPagelink, page),
//     keepPreviousData: true,
//   });

//   if (!isLoading) {
//     console.log(data);
//   }

//   const handleButtonClick = (e) => {
//     console.log("clicked search button");
//     e.preventDefault();
//     if (searchInputRef.current.value.length === 0) {
//       return;
//     }
//     executeSearchQuery();
//     navigate("/searchresults");
//     searchInputRef.current.value = "";
//     searchInputRef.current.blur();
//   };

//   const handleNextPage = (e) => {
//     e.preventDefault();
//     console.log("clicked next button");
//     if (!isPreviousData && data?._links?.next?.href) {
//       setPage((old) => old + 1);
//       setNextPagelink(data?._links.next.href);
//     }
//   };

//   const handlePreviousPage = (e) => {
//     e.preventDefault();
//     console.log("clicked previous button");
//     setPage((old) => Math.max(old - 1, 0));
//     executeSearchQuery(page);
//   };

//   return (
//     <div>
//       <form className="headersearch" onSubmit={handleButtonClick}>
//         <input type="text" placeholder="Search" ref={searchInputRef} />
//         <button type="submit" className="headersearchbutton">
//           <FaSearch className="headericon" />
//         </button>
//       </form>
//       <div>
//         <button onClick={handlePreviousPage} disabled={page === 0}>
//           Previous Page
//         </button>
//         <span>Current Page: {page + 1}</span>
//         <button
//           onClick={handleNextPage}
//           // Disable the Next Page button until we know a next page is available
//           disabled={isPreviousData || !data?._links?.next?.href}
//         >
//           Next Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeaderSearch;

// dispatch removed
// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { setButtonClicked, setSearchQuery } from "../../redux/SearchInputSlice";
// import { useParams } from "react-router-dom";

// const HeaderSearch = () => {
//   const { recipesearchquery } = useParams();
//   const searchInputRef = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   function handleButtonClick(e) {
//     e.preventDefault();
//     console.log("clicked search button");

//     if (searchInputRef.current.value.length === 0) {
//       return;
//     }
//     if (searchInputRef.current.value === recipesearchquery) {
//       return;
//     }

//     dispatch(setSearchQuery(searchInputRef.current.value));
//     dispatch(setButtonClicked(true));
//     navigate(`/searchresults/${searchInputRef.current.value}`);
//     searchInputRef.current.value = "";
//     searchInputRef.current.blur();
//   }

//   return (
//     <form className="headersearch" onSubmit={handleButtonClick}>
//       <input type="text" placeholder="Search" ref={searchInputRef} />
//       <button type="submit" className="headersearchbutton">
//         <FaSearch className="headericon" />
//       </button>
//     </form>
//   );
// };

// export default HeaderSearch;
