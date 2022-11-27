import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        className="bg-light-blue b--green shadow pa2 ma3 ba"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
