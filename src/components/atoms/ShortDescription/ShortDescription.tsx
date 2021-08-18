import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IShortDescription {
  plot: string;
}

export const ShortDescrip = memo(({ plot }: IShortDescription) => {
  return (
    <div className="short-description">
      <span>{plot}</span>
    </div>
  );
});
