import * as React from "react";
import { memo } from "react";
import { FilterBigBtn } from "../../atoms/FilterPageBigBtn";
import { FilterPageInputs } from "../../atoms/FilterPageInputs";
import { FilterPageTitle } from "../../atoms/FilterPageTitle";
import "./index.css";

export const FilterPage = memo(() => {
  return (
    <div className="filter-page-wrapper">
      <FilterPageTitle />
      <FilterPageInputs />
      <FilterBigBtn />
    </div>
  );
});
