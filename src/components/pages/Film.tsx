import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Title } from "../atoms/Title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { movie, trailer } from "../.././mock";
import { useParams } from "react-router-dom";
import { FilmCard } from "../molecules/film-card";
import { Imovie } from "../../types/index";
import { Navigation } from "../molecules/navigation";
import { Header } from "../molecules/header";
import { TrailerCard } from "../molecules/trailer-card";
import { StarRating } from "../molecules/star-rating";

export const Film = () => {
  const [selectedFilm, setSelectedFilm] = useState<Imovie | null>(null);
  const params = useParams() as any;
  console.log({ params });

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

  const trailerVideo = trailer;

  useEffect(() => {
    if (params?.id) {
      const foundFilm = movie.find(
        ({ id: filmId }) => filmId === Number(params?.id)
      );
      /* console.log({ foundFilm, id: params?.id, movie }); */
      if (foundFilm) {
        setSelectedFilm(foundFilm);
        return;
      }
      setSelectedFilm(null);
    }
    return () => {};
  }, [params?.id]);
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
        {selectedFilm ? (
          <section>
            {" "}
            <FilmCard {...selectedFilm} />{" "}
            <div className="extra-info">
              <TrailerCard movie={selectedFilm} trailer={trailerVideo} />
              <StarRating />
            </div>
          </section>
        ) : (
          <Title title={"No selected movie (please go to next tab)"} />
        )}
      </main>
    </div>
  );
};
