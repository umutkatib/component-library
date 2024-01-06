import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { CardDetailsStory } from "./components/CardDetails/CardDetails.stories";
import CardDetailsPage from "./components/CardDetails/CardDetailsPage";
import NoPage from "./components/NoPage/NoPage";

import movies from "./dataJsons/movies.json";
import games from "./dataJsons/games.json";
import musics from "./dataJsons/musics.json";

import CardGrid from "./components/CardGrid/CardGrid";
import ScrollToTopButton from "./components/ScroolToUp/ScroolToUp";


function App() {
  const [selectedMovieBox, setSelectedMovieBox] = useState(movies);
  const [selectedGamesBox, setSelectedGamesBox] = useState(games);
  const [selectedMusicsBox, setSelectedMusicsBox] = useState(musics);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to={"/home"} style={{ textDecoration: 'none' }}>
            <h2 className="headerOfStore">Katib's Library Store®</h2>
          </Link>
        </header>

        <Routes>
          <Route path="/home" element={<CardGrid />} />
          <Route
            path={`/movie-details/:id`}
            element={<CardDetailsPage data={selectedMovieBox} type={"movie"} />}
          />
          <Route
            path={`/game-details/:id`}
            element={<CardDetailsPage data={selectedGamesBox} type={"game"} />}
          />
          <Route
            path={`/music-details/:id`}
            element={<CardDetailsPage data={selectedMusicsBox} type={"music"} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      
      <ScrollToTopButton />
      
    </Router>
  );
}

export default App;
