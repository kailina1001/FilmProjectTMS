import { title } from "process";
import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IButton {
  title: string;
  isActive: boolean;
  onClick: (field: string) => void;
  field: string;
}

export const FilterPageTitle = memo(
  ({ title, isActive, onClick, field }: IButton) => {
    return (
      <div className="filter-page-title">
        <h2>Sort by:</h2>
        <div className="filter-page-btn-wrapper">
          <button
            style={{ background: isActive ? "blue" : "grey" }}
            type="submit"
            className="filter-page-btn-left"
            onClick={() => onClick(field)}
          >
            {title}
          </button>
        </div>
      </div>
    );
  }
);
