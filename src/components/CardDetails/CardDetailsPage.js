import React from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";
import "../Card/Card.css";
import "../../App.css";
import { Cards } from "../Card/Card.stories";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const CardDetailsPage = ({ data, type }) => {
  const { id } = useParams();

  const selectedData = data.find((item) => item.id.toString() === id);

  if (!selectedData) {
    return <div>404 - Page Not Found!</div>;
  }

  return (
    <div className="containerDetail">
      <div className="containerBreadCrumbBar">
        <Breadcrumb>
          <BreadcrumbItem className="breadCrumbBar">
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className="breadCrumbBar">
            <BreadcrumbLink href={`/${type}-details/${id}`}>
              This Page
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="detailImgAndWriting">
        <Cards
          key={selectedData.id}
          title={selectedData.Title}
          description={selectedData.Description}
          imageUrl={selectedData.Poster}
        >
          <h1>{selectedData.Title}</h1>
          <img src={selectedData.Poster} className="detailImage" />
          <h4>{selectedData.Description}</h4>
        </Cards>

        <Breadcrumb>
          <BreadcrumbItem className="breadCrumbBar">
            <BreadcrumbLink
              href={`/${type}-details/${id > 1 ? parseInt(id) - 1 : 3}`}
            >
              Previous
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem className="breadCrumbBar">
            <BreadcrumbLink
              href={`/${type}-details/${
                id > 0 && id < 3 ? parseInt(id) + 1 : 1
              }`}
            >
              Next
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <hr style={{ margin: "20px" }} />
        <div className="detailImgAndWriting detailWriting">
          {selectedData.Director && (
            <span>
              Director: <b>{selectedData.Director}</b>
            </span>
          )}
          <span>
            Released Date: <b>{selectedData.Released}</b>
          </span>

          <span>
            Runtime: <b>{selectedData.Runtime}</b>
          </span>

          {selectedData.Genre && (
            <span>
              Genre: <b>{selectedData.Genre}</b>
            </span>
          )}
          {selectedData.Writer && (
            <span>
              Writer: <b>{selectedData.Writer}</b>
            </span>
          )}
          {selectedData.Language && (
            <span>
              Language: <b>{selectedData.Language}</b>
            </span>
          )}
          {selectedData.Actors && (
            <span>
              Actors: <b>{selectedData.Actors}</b>
            </span>
          )}
          {selectedData.imdbRating && (
            <span>
              imdbRating: <b>{selectedData.imdbRating}</b>
            </span>
          )}
          {selectedData.Country && (
            <span>
              Country: <b>{selectedData.Country}</b>
            </span>
          )}
          {selectedData.Awards && (
            <span>
              Awards: <b>{selectedData.Awards}</b>
            </span>
          )}
          {selectedData.DescriptionDetail && (
            <span>
              Description Detail: <b>{selectedData.DescriptionDetail}</b>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
