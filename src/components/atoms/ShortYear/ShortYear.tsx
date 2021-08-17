import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IShortYear {
    year: number;
}

export const ShortYear = memo(({year}: IShortYear ) => {
    return (
    <div className="short-year">
        <p>{year}</p>
    </div>
    )
})