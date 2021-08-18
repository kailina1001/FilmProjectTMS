import * as React from "react";
import { memo } from "react";
import { Filter } from "../../atoms/Filter";
import { LogIn } from "../../atoms/LogIn/LogIn";
import { Search } from "../../atoms/Search/Search";
import { Title } from "../../atoms/Title";
import "./index.css";

export const Header = memo(() => {
  return (
    <div className="app-header">
      <div className="left-header">
        <Title title={"Movie"} />
        <Search />
        <Filter />
      </div>
      <LogIn />
    </div>
  );
});
