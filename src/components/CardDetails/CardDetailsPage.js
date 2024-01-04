import React from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css"
import "../Card/Card.css";
import "../../App.css";
import { Cards } from "../Card/Card.stories";

const CardDetailsPage = ({ data }) => {
  const { id } = useParams();

  const selectedData = data.find((item) => item.id.toString() === id);

  if (!selectedData) {
    return <div>404 - Page Not Found!</div>;
  }

  return (
    <div className="containerDetail">
      <div className="detailImgAndWriting">
      <Cards
        key={selectedData.id}
        title={selectedData.Title}
        description={selectedData.Description}
        imageUrl={selectedData.Poster}
        color={"color2"}
      >
        <h1>{selectedData.Title}</h1>
        <img src={selectedData.Poster} className="detailImage" />
        <h4>{selectedData.Description}</h4>
      </Cards>

        <hr />
      <div className="detailImgAndWriting detailWriting">
      <span>
        Director: <b>{selectedData.Director}</b>
      </span>
      <span>
        Released Date: <b>{selectedData.Released}</b>
      </span>
      <span>
        Runtime: <b>{selectedData.Runtime}</b>
      </span>
      <span>
        Genre: <b>{selectedData.Genre}</b>
      </span>
      <span>
        Writer: <b>{selectedData.Writer}</b>
      </span>
      <span>
        Actors: <b>{selectedData.Actors}</b>
      </span>
      <span>
        imdbRating: <b>{selectedData.imdbRating}</b>
      </span>
      <span>
        Country: <b>{selectedData.Country}</b>
      </span>
      <span>
        Awards: <b>{selectedData.Awards}</b>
      </span>
      </div>
    </div>
    </div>
  );
};

export default CardDetailsPage;
