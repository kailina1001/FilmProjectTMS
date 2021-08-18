import * as React from "react";
import { memo } from "react";
import "./index.css";

export const StarBtn = memo(() => {
  return (
    <div className="star-btn-wrapper">
      <button type="submit" className="star-btn">
        Add rating
      </button>
    </div>
  );
});
