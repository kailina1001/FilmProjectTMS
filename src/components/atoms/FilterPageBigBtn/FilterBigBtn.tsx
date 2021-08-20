import * as React from "react";
import { memo } from "react";
import "./index.css";

export const FilterBigBtn = memo(() => {
  return (
    <div className="filter-big-btn-wrapper">
      <button type="submit" className="filter-big-btn">
        Show results
      </button>
    </div>
  );
});
