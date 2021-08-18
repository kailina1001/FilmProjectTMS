import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilmName {
  title: string;
}

export const FilmTitle = memo(({ title }: IFilmName) => {
  return (
    <div className="film-name-wrapper">
      <h1>{title}</h1>
    </div>
  );
});
