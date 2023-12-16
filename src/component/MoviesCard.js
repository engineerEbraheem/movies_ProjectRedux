import React from "react";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const MoviesCard = ({ movieDataItem }) => {
  return (
    <Col>
      <Link to={`/MoviesDetails/${movieDataItem.id}`}>
        <div className="movieCard rounded">
          <img
            className="movieCardImg rounded"
            src={movieDataItem.img}
            alt="movieImg"
          />
          <div className="cardOverlay rounded-3 p-3 fw-bold d-flex align-items-center justify-content-center text-center">
            <div className="cardOverlayText">
              <p>اسم الفيلم: {movieDataItem.name}</p>
              <p>تاريخ الاصدار: {movieDataItem.date}</p>
              <p>النوع: {movieDataItem.type}</p>
              <p>التقيم: {movieDataItem.assessment}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MoviesCard;
