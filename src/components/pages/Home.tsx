import React, { useEffect, useState } from "react";
import { memo } from "react";
import { movie } from "./../../mock";
import { Imovie } from "../../types/index";
import { Title } from "../atoms/Title";
import { Header } from "../molecules/header";
import { Navigation } from "../molecules/navigation";
import { FilterPage } from "../organism/filter-page";

export const Home = memo(() => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(movie.slice(0, 1));
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    console.log("search");
    if (searchValue.length > 2) {
      const newFilms = movie.filter(({ title }) =>
        title
          .toLocaleLowerCase()
          .trim()
          .includes(searchValue.toLocaleLowerCase().trim())
      );
      setFilteredFilms(newFilms);
      return;
    }
    if (searchValue.length) {
      setFilteredFilms(movie);
    }
  }, [searchValue, setSearchValue]);

  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);
  };

  const onClick = () => {
    console.log("onClick");
  };

  const onClickFilterBtn = () => {
    setIsShowFilter(!isShowFilter);
  };

  const defaultSortSettings = [
    {
      title: "Rating",
      field: "imdbRating",
      isActive: false,
    },
    {
      title: "Year",
      field: "year",
      isActive: false,
    },
  ];

  const [sortSettings, setSortSettings] = useState(defaultSortSettings);

  const handlerSorting = (field: string) => {
    console.log("handlerSorting", { field });

    const firstFilm = movie[0] as any;

    const newSettings = sortSettings.map((setting) => ({
      ...setting,
      isActive: setting.field === field,
    }));
    setSortSettings(newSettings);

    if (typeof firstFilm[field] === "number") {
      const newFilms = [...movie].sort((a: any, b: any) => a[field] - b[field]);
      setFilteredFilms(newFilms);
      return;
    }
  };

  return (
    <div className="app">
      <nav className="app-navig nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header
          searchValue={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick}
          onClickFilterBtn={onClickFilterBtn}
        />
        {isShowFilter ? (
          <FilterPage sortSettings={sortSettings} onClick={handlerSorting} />
        ) : null}
        <Title title={"Use filter or search to choose movie( use next tab)"} />
      </main>
    </div>
  );
});
