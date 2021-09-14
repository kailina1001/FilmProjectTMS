import * as React from "react";
import { memo } from "react";
import "./index.css";
import { FilterTitle } from "../../atoms/FilterTitle";
import { FilmSearchInput } from "../../atoms/FilterSearchInput";
import { FilterCountries } from "../../atoms/FilterCountries";

export const FilterPageInputs = memo(() => {
  return (
    <div className="filter-page-input-wrapper">
      <div className="filter-page-input-blocks">
        <div className="filter-page-inputs-block">
          <div className="filter-page-inputs-left">
            <div className="input-search">
              <FilterTitle filterTitle={"Search in title and plot"} />
              <FilmSearchInput />
            </div>
            <div className="input-countries">
              <FilterTitle filterTitle={"Countries"} />
              <FilterCountries />
            </div>
          </div>
          <div className="filter-page-inputs-right">
            <FilterTitle filterTitle={"Years"} />
            <div className="input-years">
              <p>From</p>
              <input></input>
              <p>To</p>
              <input></input>
            </div>
            <FilterTitle filterTitle={"Rating"} />
            <div className="input-rating">
              <p>From</p>
              <input></input>
              <p>To</p>
              <input></input>
            </div>
            <div className="input-genres">
              <FilterTitle filterTitle={"Genres"} />
              <div className="genre-filter">
                <button>add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
