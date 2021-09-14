import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Title } from "../atoms/Title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input } from "../atoms/Input";
import { ButtonForInput } from "../atoms/ButtonForInput";
import { login } from "../router/utils";
import { useHistory } from "react-router";
import { validateName, validateEmail } from "../helper/ForLogin";
import { Navigation } from "../molecules/navigation/Navigation";
import { Header } from "../molecules/header";

interface ILogin {
  searchValue: string;
  onChangeHandler: (text: string) => void;
  isValid: boolean;
  title: string;
  children: string;
  onClick: () => void;
}

export const Login = ({
  searchValue,
  onChangeHandler,
  isValid,
  title,
  children,
  onClick,
}: ILogin) => {
  const [userName, setUserName] = useState(" ");
  const [email, setEmail] = useState("");

  const isValidUserName = validateName(userName);
  const isValidEmail = validateEmail(email);
  const history = useHistory();

  const [isShowFilter, setIsShowFilter] = useState(false);
  const onClickFilterBtn = () => {
    setIsShowFilter(!isShowFilter);
  };

  const loginUser = () => {
    if (isValidUserName && isValidEmail) {
      console.log("login");
      login(userName);
      history.push("/films");
    }
  };
  return (
    <div className="app">
      <nav className="app-navig nav">
        <Navigation />
      </nav>
      <main className="login-wrapper">
        <Header
          searchValue={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick}
          onClickFilterBtn={onClickFilterBtn}
        />
        <Title title={"Login"} />
        <div className="form-wrapper">
          <form className="form">
            <Input
              searchValue={userName}
              onChangeHandler={(text: string) => setUserName(text)}
              title={"User name"}
              isValid={isValidUserName}
            />
            <Input
              searchValue={email}
              onChangeHandler={(text: string) => setEmail(text)}
              title={"Email"}
              isValid={isValidEmail}
            />
            <ButtonForInput isValid={true} onClick={loginUser}>
              Login
            </ButtonForInput>
          </form>
        </div>
      </main>
    </div>
  );
};
