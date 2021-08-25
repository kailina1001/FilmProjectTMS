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
    <div>
      <input
        value={searchValue}
        onChange={(e) => onChangeHandler(e.target.value)}
        className="header-input"
        placeholder="Search"
        type="search"
      />
      <button onClick={onClick}>Click</button>
    </div>
  )
);
