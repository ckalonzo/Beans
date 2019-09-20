import React, { Fragment } from "react";
import NoImagePic from "../../Browse/img/no-image.png";
import "../scss/NoImage.scss";
const NoImage = props => {
  return (
    <Fragment>
      <div class="img-wrap col-12">
        <img src={NoImagePic} className="imgStyle col-12" />
      </div>
    </Fragment>
  );
};

export default NoImage;
