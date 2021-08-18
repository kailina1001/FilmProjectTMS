import { dir } from "console";
import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilmInfo {
  year: number;
  released: string;
  runtime: string;
  boxOffice: string;
  genre: string[];
  country: string;
  production: string;
  writer: string;
  director: string;
  actors: string[];
}

export const FilmInfo = memo(
  ({
    year,
    released,
    runtime,
    boxOffice,
    genre,
    country,
    production,
    writer,
    director,
    actors,
  }: IFilmInfo) => {
    return (
      <dl className="film-info">
        <dt>Year</dt>
        <dd>{year}</dd>
        <dt>Released</dt>
        <dd>{released}</dd>
        <dt>Runtime</dt>
        <dd>{runtime}</dd>
        <dt>BoxOffice</dt>
        <dd>{boxOffice}</dd>
        <dt>Genre</dt>
        <dd>{genre.join(", ")}</dd>
        <dt>Country</dt>
        <dd>{country}</dd>
        <dt>Production</dt>
        <dd>{production}</dd>
        <dt>Writer</dt>
        <dd>{writer}</dd>
        <dt>Director</dt>
        <dd>{director}</dd>
        <dt>Actors</dt>
        <dd>{actors.toString()}</dd>
      </dl>

      /*     <div className="film-info-wrapper">
        <ul className="film-keys">
          <li>Year</li>
          <li>Released</li>
          <li>Runtime</li>
          <li>BoxOffice</li>
          <li>Genre</li>
          <li>Country</li>
          <li>Production</li>
          <li>Writer</li>
          <li>Director</li>
          <li>Actors</li>
        </ul>
        <ul className="film-value">
          <li>{year}</li>
          <li>{released}</li>
          <li>{runtime}</li>
          <li>{boxOffice}</li>
          <li>{genre.join(', ')}</li>
          <li>{country}</li>
          <li>{production}</li>
          <li>{writer}</li>
          <li>{director}</li>
          <li>{actors.toString()}</li>
        </ul>
    </div> */
    );
  }
);
