import React, { useEffect } from "react";
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
  /* const selectedUser = movie[1]; */
  const trailerVideo = trailer;
  const countries = movie.map((movie) => movie.country);
  /*  const countries = массивуникальных ингредиентов, 
  прокинуть в фильтр пэйдж сантрис = кантрис через пропсы , по массиву пройти map ,
  onChance  и через target value*/

  //нажатие на маленькую карточку- выводим большую с этим же id
  const onClickFilm = (id: number) => {
    console.log({ id });
    const newFilm = movie.find(({ id: filmId }) => id === filmId);

    if (newFilm) {
      setSelectedFilm(newFilm);
    }
  };

  //add закладку
  const addBookmark = (id: number) => {
    console.log("addBookmark");
    const hasId = bookmarksId.find((currentId) => currentId === id);
    if (hasId) {
      return;
    }
    const newBookmark = [...bookmarksId, id];
    setBookmarksId(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmark));
  };

  //remove закладку
  const removeBookmark = (id: number) => {
    console.log("setBookmarksId");
    const filtredBookmarks = bookmarksId.filter(
      (currentId) => currentId !== id
    );
    setBookmarksId(filtredBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(filtredBookmarks));
  };

  // подключение localStorage к закладкам
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarksId(JSON.parse(savedBookmarks));
    }
    const savedViewedFilms = localStorage.getItem("viedFilm");
    if (savedViewedFilms) {
      setViewedFilm(JSON.parse(savedViewedFilms));
    }

    return () => {
      //аналог анмаунта
    };
  }, []);

  // Ставим метку просмотрено
  const onChangeSwitcher = (id: number, checked: boolean) => {
    setIsViewedChecked(!isViewedChecked);

    const newViewedFilm = checked
      ? viewedFilm.filter((currentId) => currentId !== id)
      : [...viewedFilm, id];

    setViewedFilm(newViewedFilm);

    localStorage.setItem("viedFilm", JSON.stringify(newViewedFilm));
  };

  const [viewedFilm, setViewedFilm] = useState<number[]>([]);
  const [isViewedChecked, setIsViewedChecked] = useState(false);
  console.log({ viewedFilm });
  const [bookmarksId, setBookmarksId] = useState<number[]>([]);
  const [filteredFilms, setFilteredFilms] = useState(movie.slice(0, 1));
  const [searchValue, setSearchValue] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(movie[0]);

  // Поисковик по useEffect
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

  /* const onClickNextFilm = () => {
    setFilteredFilms(
      [...movie]
        .slice(0, filteredFilms.length + 1)
    );
  }; */

  // Поисковик по useState
  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);

    //надо перепесать через useEffect (написано выше!))
    /* if (text.length > 2) {
      const newFilms = movie.filter(({ title }) =>
        title
          .toLocaleLowerCase()
          .trim()
          .includes(searchValue.toLocaleLowerCase().trim())
      );
      setFilteredFilms(newFilms);
      return;
    }
    setFilteredFilms(movie); */
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
    /* console.log("next film");
    const fieldFilm = sortSettings.reduce((acc, { isActive, field }) => {
      return isActive ? field : acc;
    }, ""); */
    setFilteredFilms(
      [...movie]
        /*         .sort((a: any, b: any) => a[fieldFilm] - b[fieldFilm]) */
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
            <ShortFilmCard
              movie={filteredFilms}
              onClickFilm={onClickFilm}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
              bookmarksId={bookmarksId}
              viewedFilm={viewedFilm}
              text={"Просмотрено"}
              checked={isViewedChecked}
              /* checked={Boolean(viewedFilm.includes(movie.id as number))} */
              onChange={onChangeSwitcher}
            />
          ) : (
            <p>No movie</p>
          )}
        </div>
        <FilmCard {...selectedFilm} />
        <div className="extra-info">
          <TrailerCard movie={selectedFilm} trailer={trailerVideo} />
          <StarRating />
        </div>

        {/* <div className="filter-page">
          <div className="other-title">
            <Title title={"Movie"} />
          </div>
          <FilterPage sortSettings={sortSettings} onClick={handlerSorting} />
        </div> */}
      </main>
    </div>
  );
}

export default App;
