import React from "react";
import Rating from "react-rating";

const AvgRating = props => {
  return (
    <div className="col-12">
      <h6>Ratings</h6>
      <Rating initialRating={props.contractorProfile.rating} readonly />
    </div>
  );
};

export default AvgRating;
