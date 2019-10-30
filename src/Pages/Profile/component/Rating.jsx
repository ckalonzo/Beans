import React from "react";
import Rating from "react-rating";

const AvgRating = props => {
  return (
    <div className="col-12">
      <h6>Ratings</h6>
      <Rating initialRating={2.5} readonly />
    </div>
  );
};

export default AvgRating;
