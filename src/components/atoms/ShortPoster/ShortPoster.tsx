import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IShortPoster {
  poster: string;
}

export const ShortPoster = memo(({ poster }: IShortPoster) => {
  return (
    <div className="short-film-poster">
      <img src={poster} />
    </div>
  );
});
