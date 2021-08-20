import * as React from "react";
import { memo } from "react";
import "./index.css";

export const FilterPageInputs = memo(() => {
  return (
    <div className="filter-page-input-wrapper">
      <div className="filter-page-input-title">
        <h2>Filter:</h2>
      </div>
      <div className="filter-page-input-blocks">
        <div className="filter-page-inputs-block">
          <div className="filter-page-inputs-left">
            <div className="input-search">
              <h3>Search in title and plot</h3>
              <input></input>
            </div>
            <div className="input-countries">
              <h3>Countries</h3>
              <select>
                <option></option>
                <option>United States</option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="filter-page-inputs-right">
            <h3>Years</h3>
            <div className="input-years">
              <p>From</p>
              <input></input>
              <p>To</p>
              <input></input>
            </div>
            <h3>Rating</h3>
            <div className="input-rating">
              <p>From</p>
              <input></input>
              <p>To</p>
              <input></input>
            </div>
            <div className="input-genres">
              <h3>Genres</h3>
              <input></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
