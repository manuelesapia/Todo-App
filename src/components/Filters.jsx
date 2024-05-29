import React from "react";

function Filters({ changeFilter }) {
  function handleFilterChange(filter) {
    return function () {
      changeFilter(filter);
    };
  }

  return (
    <div className="filters btn-group stack-exception">
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed="true"
        onClick={handleFilterChange("All")}
      >
        <span className="visually-hidden">Show </span>
        <span>All</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed="false"
        onClick={handleFilterChange("Active")}
      >
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed="false"
        onClick={handleFilterChange("Completed")}
      >
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  );
}

export default Filters;
