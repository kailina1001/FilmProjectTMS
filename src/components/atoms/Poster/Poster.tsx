import * as React from "react";
import { memo } from "react";
import "./index.css";

interface Iposter {
    poster: string;
}

export const Poster = memo(({poster}: Iposter ) => {
    return (
    <div className="film-poster">
        <img src={poster} />
    </div>
    )
})