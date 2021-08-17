import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Imovies } from "../../../mock";
import { Poster } from "../../atoms/Poster";
import { Rating } from "../../atoms/Rating";
import { Description } from "../../atoms/Description";
import { FilmTitle } from "../../atoms/Film-title";
import { FilmInfo } from "../../atoms/Film-info";



export const FilmCard = memo(() => {
    const chooseMovie = Imovies[1];
    return (
<div className="film-card-wrapper">
    <div className="film-card">
        <div className="card-content">
                <div className="left-content">
                    <Poster poster={chooseMovie.poster}/>
                    <Rating imdbRating={chooseMovie.imdbRating} imdbVotes={chooseMovie.imdbVotes}/>
                </div>
                <div className="right-content">
                    <FilmTitle title={chooseMovie.title}/>
                    <FilmInfo year={chooseMovie.year} released={chooseMovie.released} runtime={chooseMovie.runtime}
                    boxOffice={chooseMovie.boxOffice} genre={chooseMovie.genre} country={chooseMovie.country}
                    production={chooseMovie.production} writer={chooseMovie.writer} director={chooseMovie.director}
                    actors={chooseMovie.actors} />
                </div>
        </div>
        <div className="card-description">
                    <Description plot={chooseMovie.plot} />
        </div>
    </div>
</div>
    )
})