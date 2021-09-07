import * as React from "react";
import { memo } from "react";
import "./index.css";
import { ShortPoster } from "../../atoms/ShortPoster";
import { ShortTitle } from "../../atoms/ShortTitle";
import { ShortYear } from "../../atoms/ShortYear";
import { ShortDescrip } from "../../atoms/ShortDescription";
import { Imovie } from "../../../types";
import { ButtonShowFilm } from "../../atoms/ButtonShowFilm";
import { Switch } from "../../atoms/Switch";

interface IShortCard {
  movie: Imovie[];
  onClickFilm: (id: number) => void;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
  bookmarksId: number[];
  checked: boolean;
  text: string;
  id: number;
  onChange: (id: number, checked: boolean) => void;
}

export const ShortFilmCard = memo(
  ({
    movie,
    onClickFilm,
    addBookmark,
    removeBookmark,
    bookmarksId,
    id,
    text,
    checked,
    onChange,
  }: IShortCard) => {
    return (
      <>
        <div className="short-film-wrapper">
          {" "}
          {/* переименовать с short на list- это список фильмов!!!! */}
          {movie?.map((movie) => (
            <div key={movie.id}>
              <div
                className="short-film-card"
                onClick={() => onClickFilm(movie.id)}
              >
                <ShortPoster poster={movie.poster} />
                <ShortTitle title={movie.title} />
                <ShortYear year={movie.year} />
                <ShortDescrip plot={movie.plot} />
              </div>
              <div className="under-card">
                <div>
                  <Switch
                    checked={checked}
                    text={text}
                    onChange={() => onChange(id, checked)}
                    id={movie.id}
                  />
                </div>
                <div>
                  {!bookmarksId?.find((id) => id === movie.id) ? (
                    <button
                      className="add-bookmark"
                      onClick={() => addBookmark(movie.id)}
                    >
                      Add bookmark
                    </button>
                  ) : (
                    <button
                      className="remove-bookmark"
                      onClick={() => removeBookmark(movie.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
);
