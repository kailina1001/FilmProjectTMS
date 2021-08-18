import * as React from "react";
import { memo } from "react";
import { StarBtn } from "../../atoms/Star-button";
import { StarTitle } from "../../atoms/Star-title";
import { Stars } from "../../atoms/Stars";
import "./index.css";

export const StarRating = memo(() => {
  return (
    <div className="star-rating-wrapper">
      <StarTitle />
      <Stars />
      <StarBtn />
    </div>
  );
});
