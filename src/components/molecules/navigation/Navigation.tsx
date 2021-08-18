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

export const Navigation = memo(() => {
  return (
    <div className="app-navigation">
      <a href="#">
        <img src={home} />
      </a>
      <a href="#">
        <img src={list} />
      </a>
      <a href="#">
        <img src={users} />
      </a>
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
      <img src={darkTheme} className="dark-theme" />
    </div>
  );
});
