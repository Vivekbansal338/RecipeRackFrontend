import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const HeaderSearch = () => {
  const { recipesearchquery } = useParams();
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  function handleButtonClick(e) {
    e.preventDefault();
    if (searchInputRef.current.value.length === 0) {
      return;
    }
    if (searchInputRef.current.value === recipesearchquery) {
      return;
    }
    navigate(`/searchresults/${searchInputRef.current.value}`);
    searchInputRef.current.value = "";
    searchInputRef.current.blur();
  }

  return (
    <form onSubmit={handleButtonClick} className="headersearch">
      <input type="text" placeholder="Search" ref={searchInputRef} />
      <button type="submit" className="headersearchbutton">
        <FaSearch className="headericon" />
      </button>
    </form>
  );
};

export default HeaderSearch;
