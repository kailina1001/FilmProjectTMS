import * as React from "react";
import { memo } from "react";

import "./index.css";

interface IInput {
  searchValue: string;
  onChangeHandler: (text: string) => void;
  title: string;
  isValid: boolean;
}

export const Input = memo(
  ({ searchValue, onChangeHandler, title, isValid }: IInput) => (
    <div className="column">
      <label className={"title-for-login"}>{title}</label>
      <input
        style={{
          border: !isValid ? "2px solid red" : "2px solid gray",
        }}
        className="input-for-login"
        value={searchValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  )
);
