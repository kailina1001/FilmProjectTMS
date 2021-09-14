import * as React from "react";
import { memo } from "react";
import { FilterBigBtn } from "../../atoms/FilterPageBigBtn";
import { FilterPageInputs } from "../FilterPageInputs";
import { FilterPageTitle } from "../../atoms/FilterPageTitle";
import { ISettingsSort } from "../../../types";
import "./index.css";
import { Title } from "../../atoms/Title";
import { ButtonByFilter } from "../../atoms/ButtonByFilter";

interface ISortingByFilter {
  onClick: (field: string) => void;
  sortSettings: ISettingsSort[];
}

export const SortingByFilter = memo(
  ({ onClick, sortSettings }: ISortingByFilter) => {
    return (
      <div>
        {/* <Title title={"Sort By"} /> */}
        {sortSettings?.map((setting) => (
          <ButtonByFilter {...setting} onClick={onClick} />
        ))}
      </div>
    );
  }
);
