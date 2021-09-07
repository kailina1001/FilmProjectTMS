import * as React from "react";
import { memo } from "react";
import { FilterBigBtn } from "../../atoms/FilterPageBigBtn";
import { FilterPageInputs } from "../../molecules/FilterPageInputs";
import { FilterPageTitle } from "../../atoms/FilterPageTitle";
import { ISettingsSort } from "../../../types";
import "./index.css";
import { Title } from "../../atoms/Title";
import { SortingByFilter } from "../../molecules/SortingByFilter";

interface IFilter {
  onClick: (field: string) => void;
  sortSettings: ISettingsSort[];
}

export const FilterPage = memo(({ onClick, sortSettings }: IFilter) => {
  return (
    <div className="filter-page-wrapper">
      <Title title={"Sort by"} />
      <SortingByFilter sortSettings={sortSettings} onClick={onClick} />
      <Title title={"Filter"} />
      <FilterPageInputs />
      <FilterBigBtn />
    </div>
  );
});
