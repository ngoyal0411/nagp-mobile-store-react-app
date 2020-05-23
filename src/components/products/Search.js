import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    props.search(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className="searchDiv">
      <input
        type="search"
        placeholder="Search for products..."
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
    </div>
  );
};

export default Search;
