import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Poster } from "../../atoms/Poster";
import { Rating } from "../../atoms/Rating";
import { Description } from "../../atoms/Description";
import { FilmTitle } from "../../atoms/Film-title";
import { FilmInfo } from "../../atoms/Film-info";
import { Imovie } from "../../../types";

export const FilmCard = memo((movie: Imovie) => {
  return (
    <div className="film-card-wrapper">
      <div className="film-card">
        <div className="card-content">
          <div className="left-content">
            <Poster poster={movie.poster} />
            <Rating imdbRating={movie.imdbRating} imdbVotes={movie.imdbVotes} />
          </div>
          <div className="right-content">
            <FilmTitle title={movie.title} />
            <FilmInfo {...movie} />
          </div>
        </div>
        <div className="card-description">
          <Description plot={movie.plot} />
        </div>
      </div>
    </div>
  );
});
