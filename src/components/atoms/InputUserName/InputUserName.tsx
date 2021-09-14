import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IInputUser {
  searchValue: string;
}

export const InputUserName = memo(({ searchValue }: IInputUser) => {
  return (
    <div className="user-name-wrapper">
      <input className="user-name-input" value={searchValue}></input>
    </div>
  );
});
