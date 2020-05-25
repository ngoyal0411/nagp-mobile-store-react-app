import React, { useState } from "react";

const SortProducts = (props) => {
  const [sortOrders] = useState([
    { id: 1, preferance: "Low-High" },
    { id: 2, preferance: "High-Low" },
  ]);
  const [selectedSortOrder, setSelectedSortOrder] = useState("");

  const handleSortingOrderChanges = (e) => {
    setSelectedSortOrder(e.target.value);
    if (e.target.value === "low-high") {
      props.sortingBasedOnPrice("asc");
    } else if (e.target.value === "high-low") {
      props.sortingBasedOnPrice("desc");
    } else {
      props.sortingBasedOnPrice(""); //if user selects choose option from dropdown
    }
  };

  return (
    <div className="sort-div">
      <select
        className="form-control"
        value={selectedSortOrder}
        onChange={handleSortingOrderChanges}
      >
        <option value="">Choose....</option>
        {sortOrders.map((order) => (
          <option
            key={order.id}
            value={order.preferance.replace(" ", "").toLowerCase()}
          >
            {order.preferance}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortProducts;
