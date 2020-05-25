import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
    props.search(e.target.value);
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
