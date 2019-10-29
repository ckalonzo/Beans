import React from "react";
import "./css/divider.scss";

const divider = props => {
  return (
    <div className={props.colspan}>
      <div className={"greydivider " + props.className} />
    </div>
  );
};

export default divider;
