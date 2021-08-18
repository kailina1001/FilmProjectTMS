import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Imovies } from "../../../mock";
import { ShortPoster } from "../../atoms/ShortPoster";
import { ShortTitle } from "../../atoms/ShortTitle";
import { ShortYear } from "../../atoms/ShortYear";
import { ShortDescrip } from "../../atoms/ShortDescription";

export const ShortFilmCard = memo(() => {
  return (
    <div className="short-film-wrapper">
      {Imovies?.map((movie) => (
        <div className="short-film-card">
          <ShortPoster poster={movie.poster} />
          <ShortTitle title={movie.title} />
          <ShortYear year={movie.year} />
          <ShortDescrip plot={movie.plot} />
        </div>
      ))}
    </div>
  );
});
