import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IShortTitle {
  title: string;
}

export const ShortTitle = memo(({ title }: IShortTitle) => {
  return (
    <div className="film-poster">
      <h1>{title}</h1>
    </div>
  );
});
