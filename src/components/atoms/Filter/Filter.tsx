import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilter {
  onClickFilterBtn: () => void;
}

export const Filter = memo(({ onClickFilterBtn }: IFilter) => {
  return <button className="btn__filter" onClick={onClickFilterBtn}></button>;
});
