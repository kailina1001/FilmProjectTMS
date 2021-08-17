import * as React from "react";
import { memo } from "react";
import "./index.css";
import ava from "../../../image/ava.svg";


export const LogIn = memo(() => {
  return (
      <div className="log-in-wrap">
        <span className="user-name"> Anya</span>
        <img className="ava-pic" src={ava}/>
        <button className="log-in-btn"></button>
        </div>
  )
})