import * as React from "react";
import { memo } from "react";
import "./index.css";
import home from "../../../image/nav-pic/home.svg";
import list from "../../../image/nav-pic/list.svg";
import users from "../../../image/nav-pic/users.svg";
import mail from "../../../image/nav-pic/mail.svg";
import play from "../../../image/nav-pic/play.svg";
import diagram from "../../../image/nav-pic/diagram.svg";
import settings from "../../../image/nav-pic/settings.svg";
import darkTheme from "../../../image/nav-pic/dark-theme.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navigation = memo(() => {
  return (
    <div className="app-navigation-wrapper">
      <div className="app-navigation">
        <Link to="/">
          <img src={home} />
        </Link>
        <Link to="/film/:id">
          <img src={list} />
        </Link>
        <Link to="/films">
          <img src={users} />
        </Link>
        <a href="#">
          <img src={mail} />
        </a>
        <a href="#">
          <img src={play} />
        </a>
        <a href="#">
          <img src={diagram} />
        </a>
        <a href="#">
          <img src={settings} />
        </a>
        <div className="page-theme">
          <div className="dark-theme">
            <img src={darkTheme} />
          </div>
        </div>
      </div>
    </div>
  );
});
