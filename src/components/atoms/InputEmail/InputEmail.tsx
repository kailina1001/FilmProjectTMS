import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IInputEmail {
  searchValue: string;
}

export const InputEmail = memo(({ searchValue }: IInputEmail) => {
  return (
    <div className="email-wrapper">
      <input className="email-input" value={searchValue}></input>
    </div>
  );
});
