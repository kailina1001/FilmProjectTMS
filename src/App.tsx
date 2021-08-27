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
import { FilterPage } from "./components/molecules/filter-page";
import { movie, trailer } from "./mock";
import { useState } from "react";
import { Filter } from "./components/atoms/Filter";

function App() {
  const selectedUser = movie[1];
  const trailerVideo = trailer;
  const [filteredFilms, setFilteredFilms] = useState(movie);
  const [searchValue, setSearchValue] = useState("");

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

  const [isClickedFilterBtn, setIsClickedFilterBtn] = useState(false);

  const onClickFilterBtn = () => {
    setIsClickedFilterBtn(!isClickedFilterBtn);
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
        {isClickedFilterBtn ? <FilterPage /> : null}

        <FilmCard {...selectedUser} />
        <div className="extra-info">
          <TrailerCard movie={selectedUser} trailer={trailerVideo} />
          <StarRating />
        </div>
        <div className="other-films">
          <div className="other-title">
            <Title title={"Next movie"} />
          </div>
          {movie?.length ? (
            <ShortFilmCard movie={filteredFilms} />
          ) : (
            <p>No movie</p>
          )}
        </div>
        <div className="filter-page">
          <div className="other-title">
            <Title title={"Movie"} />
          </div>
          <FilterPage />
        </div>
      </main>
    </div>
  );
}

export default App;
