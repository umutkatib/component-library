import { Link } from "react-router-dom";
import { Cards } from "../Card/Card.stories";
import movies from "../../dataJsons/movies.json";
import games from "../../dataJsons/games.json";
import musics from "../../dataJsons/musics.json";
import "../../App.css";

function CardGrid() {
  return (

    <div className="container">
      <div className="groupOfCards">
        <h1 className="mainTitles">Movies</h1>
        {movies.map((data) => (
          <div className="boxGrid">
            <Link to={`/movie-details/${data.id}`}>
              <Cards
                key={data.id}
                title={data.Title}
                description={data.Description}
                imageUrl={data.Poster}
                color={"color1"}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="groupOfCards">
        <h1 className="mainTitles">Games</h1>
        {games.map((data) => (
          <div className="boxGrid">
            <Link to={`/games-details/${data.id}`}>
              <Cards
                key={data.id}
                title={data.Title}
                description={data.Description}
                imageUrl={data.Poster}
                color={"color2"}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="groupOfCards">
        <h1 className="mainTitles">Musics</h1>
        {musics.map((data) => (
          <div className="boxGrid">
            <Link to={`/musics-details/${data.id}`}>
              <Cards
                key={data.id}
                title={data.Title}
                description={data.Description}
                imageUrl={data.Poster}
                color={"color3"}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
