import * as React from "react";
import { memo } from "react";
import "./index.css";

interface Input {
  searchValue: string;
  onChangeHandler: (text: string) => void;
  onClick: () => void;
}

export const Search = memo(
  ({ searchValue, onChangeHandler, onClick }: Input) => (
    <div className="header-input-wrapper">
      <input
        value={searchValue}
        onChange={(e) => onChangeHandler(e.target.value)}
        className="header-input"
        placeholder="Search"
        type="search"
      />
      <button className="header-input-btn" onClick={onClick}>
        Search
      </button>
    </div>
  )
);
