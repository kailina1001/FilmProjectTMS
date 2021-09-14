import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Film } from "./components/pages/Film";
import { Films } from "./components/pages/Films";
import { Title } from "./components/atoms/Title";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";
import { PrivateRoute } from "./components/router/PrivateRouter";
import { PublicRoute } from "./components/router/PublicRouter";

function App() {
  const loggedIn = false;
  console.log({ loggedIn });
  if (!loggedIn) {
    <Redirect to="/login" />;
  }
  return (
    <Router>
      <div>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link className={"app"} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/film/:id">Film</Link>
              </li>
              <li>
                <Link to="/films">Films</Link>
              </li>
            </ul>
          </nav> */}
        </div>
        <Switch>
          <PublicRoute restricted={true} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute restricted={true} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={Film} path="/film/:id" exact />
          <PrivateRoute component={Films} path="/films" exact />
          <PublicRoute restricted={true} component={NotFound} exact />

          {/* <Route exact path="/film/:id">
            <Film />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Title title={"not found"} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
