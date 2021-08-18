import "./App.css";
import { Imovies } from "./mock";
import { Header } from "./components/molecules/header";
import { Navigation } from "./components/molecules/navigation";
import { FilmCard } from "./components/molecules/film-card";
import { ShortFilmCard } from "./components/molecules/short-film-card";
import { ShortTitleCard } from "./components/molecules/short-title-card";
import { Title } from "./components/atoms/Title";
import { TrailerCard } from "./components/molecules/trailer-card";
import { StarRating } from "./components/molecules/star-rating";

function App() {
  const selectedUser = Imovies[0];

  return (
    <div className="app">
      <nav className="app-nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header />
        <FilmCard />
        <div className="extra-info">
          <TrailerCard />
          <StarRating />
        </div>
        <div className="other-films">
          <div className="other-title">
            <Title title={"Next movie"} />
          </div>
          <ShortFilmCard />
        </div>
      </main>
    </div>
  );
}

export default App;
