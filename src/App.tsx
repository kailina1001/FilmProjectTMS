import React from "react";
import "./App.css";
import { Header } from "./components/molecules/header";
import { Navigation } from "./components/molecules/navigation";
import { FilmCard } from "./components/molecules/film-card";
import { ShortFilmCard } from "./components/molecules/short-film-card";
import { ShortTitleCard } from "./components/molecules/short-title-card";
import { Title } from "./components/atoms/Title";
import { TrailerCard } from "./components/molecules/trailer-card";
import { StarRating } from "./components/molecules/star-rating";
import { FilterPage } from "./components/organism/filter-page";
import { movie, trailer } from "./mock";
import { useState } from "react";
import { Filter } from "./components/atoms/Filter";
import { ISettingsSort } from "./types";
import { ButtonShowFilm } from "./components/atoms/ButtonShowFilm";

function App() {
  // Поисковик
  const selectedUser = movie[1];
  const trailerVideo = trailer;
  /* const countries = counties массив */

  const [filteredFilms, setFilteredFilms] = useState(movie.slice(0, 1));
  const [searchValue, setSearchValue] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);

  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);
    if (text.length > 2) {
      const newFilms = movie.filter(({ title }) =>
        title
          .toLocaleLowerCase()
          .trim()
          .includes(searchValue.toLocaleLowerCase().trim())
      );
      setFilteredFilms(newFilms);
      return;
    }
    setFilteredFilms(movie);
  };

  const onClick = () => {
    console.log("onClick");
  };

  //Появление фильтра и сортировка по рейтингу и году

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

  // Пагинация с кнопкой

  const onClickNextFilm = () => {
    console.log("next film");
    const fieldFilm = sortSettings.reduce((acc, { isActive, field }) => {
      return isActive ? field : acc;
    }, "");
    setFilteredFilms(
      [...movie]
        .sort((a: any, b: any) => a[fieldFilm] - b[fieldFilm])
        .slice(0, filteredFilms.length + 1)
    );
  };

  return (
    <div className="app">
      <nav className="app-navig">
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
        <div className="other-films">
          <div className="other-title">
            {filteredFilms.length !== movie.length && (
              <ButtonShowFilm
                title={"Show Film"}
                isActive={true}
                onClickNextFilm={onClickNextFilm}
              />
            )}
          </div>
          {movie?.length ? (
            <ShortFilmCard movie={filteredFilms} />
          ) : (
            <p>No movie</p>
          )}
        </div>
        <FilmCard {...selectedUser} />
        <div className="extra-info">
          <TrailerCard movie={selectedUser} trailer={trailerVideo} />
          <StarRating />
        </div>

        <div className="filter-page">
          <div className="other-title">
            <Title title={"Movie"} />
          </div>
          <FilterPage sortSettings={sortSettings} onClick={handlerSorting} />
        </div>
      </main>
    </div>
  );
}

export default App;
