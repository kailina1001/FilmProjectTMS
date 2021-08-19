import * as React from "react";
import { memo } from "react";
import "./index.css";
import { movie } from "../../../mock";
import { trailer } from "../../../mock";
import { TrailerTitle } from "../../atoms/Trailer-title";
import { TrailerVideo } from "../../atoms/Trailer-video";
import { TrailerDescrip } from "../../atoms/Trailer-description";
import { Itrailer } from "../../../types";

export const TrailerCard = memo((trailer: Itrailer) => {
  const trailerMovie = movie[1];
  return (
    <div className="trailer-card-wrapper">
      <TrailerTitle title={trailerMovie.title} />
      <TrailerVideo trailer={trailer.trailer} />
      <TrailerDescrip description={trailer.description} />
    </div>
  );
});
