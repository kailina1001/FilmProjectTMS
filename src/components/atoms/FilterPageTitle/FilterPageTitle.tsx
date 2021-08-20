import * as React from "react";
import { memo } from "react";
import "./index.css";

export const FilterPageTitle = memo(() => {
  return (
    <div className="filter-page-title">
      <h2>Sort by:</h2>
      <div className="filter-page-btn-wrapper">
        <button type="submit" className="filter-page-btn-left">
          Rating
        </button>
        <button type="submit" className="filter-page-btn-right">
          Year
        </button>
      </div>
    </div>
  );
});
