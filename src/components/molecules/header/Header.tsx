import * as React from "react";
import { memo } from "react";
import { Filter } from "../../atoms/Filter";
import { LogIn } from "../../atoms/LogIn/LogIn";
import { Search } from "../../atoms/Search/Search";
import { Title } from "../../atoms/Title";
import "./index.css";

interface Input {
  searchValue: string;
  onChangeHandler: (text: string) => void;
  onClick: () => void;
  onClickFilterBtn: () => void;
}

export const Header = memo(
  ({ searchValue, onChangeHandler, onClick, onClickFilterBtn }: Input) => {
    return (
      <div className="app-header">
        <div className="left-header">
          <Title title={"Movie"} />
          <Search
            searchValue={searchValue}
            onChangeHandler={onChangeHandler}
            onClick={onClick}
          />
          <Filter onClickFilterBtn={onClickFilterBtn} />
        </div>
        <LogIn />
      </div>
    );
  }
);
