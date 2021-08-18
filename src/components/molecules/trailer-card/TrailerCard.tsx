import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Imovies } from "../../../mock";
import { ITrailer } from "../../../mock";
import { TrailerTitle } from "../../atoms/Trailer-title";
import { TrailerVideo } from "../../atoms/Trailer-video";
import { TrailerDescrip } from "../../atoms/Trailer-description";

/* interface ITrailerDescrip {
  description: string;
} */

export const TrailerCard = memo(() => {
  const trailerMovie = Imovies[1];
  const trailerVideo = ITrailer;
  return (
    <div className="trailer-card-wrapper">
      <TrailerTitle title={trailerMovie.title} />
      <TrailerVideo trailer={trailerVideo.trailer} />
      <TrailerDescrip description={trailerVideo.description} />
    </div>
  );
});
