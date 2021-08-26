import * as React from "react";
import { memo } from "react";
import "./index.css";
import { TrailerTitle } from "../../atoms/Trailer-title";
import { TrailerVideo } from "../../atoms/Trailer-video";
import { TrailerDescrip } from "../../atoms/Trailer-description";
import { Imovie, Itrailer } from "../../../types";

interface ITrailerCard {
  movie: Imovie;
  trailer: Itrailer;
}

export const TrailerCard = memo(({ trailer, movie }: ITrailerCard) => {
  return (
    <div className="trailer-card-wrapper">
      <TrailerTitle {...movie} />
      <TrailerVideo {...trailer} />
      <TrailerDescrip {...trailer} />
    </div>
  );
});
