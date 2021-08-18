import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITrailerName {
  title: string;
}

export const TrailerTitle = memo(({ title }: ITrailerName) => {
  return (
    <div className="trailer-name-wrapper">
      <h1>Trailer: {title}</h1>
    </div>
  );
});
