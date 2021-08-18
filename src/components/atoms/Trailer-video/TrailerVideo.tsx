import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IVideo {
  trailer: string;
}

export const TrailerVideo = memo(({ trailer }: IVideo) => {
  return (
    <div className="film-trailer">
      {/* <video src={trailer} controls preload="metadata" /> */}
      <iframe
        width="516"
        height="282"
        src={trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
});
