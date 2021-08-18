import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITrailerDescrip {
  description: string;
}

export const TrailerDescrip = memo(({ description }: ITrailerDescrip) => {
  return (
    <div className="description-trailer">
      <p>{description}</p>
    </div>
  );
});
