import * as React from "react";
import { memo } from "react";
import "./index.css";
import { movie } from "../../../mock";

/* interface IFilterCountries {
  country: string;
} */

export const FilterCountries = memo(() => {
  return (
    <select>
      <option></option>
      {movie
        .map((movie) => movie.country.split(",").reduce((item) => item))
        .filter((item, index, arr) => arr.indexOf(item) == index)
        .map((country) => (
          <option>{country}</option>
        ))}
    </select>
  );
});
