import React from "react";

const CloseIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        fill={props.fill}
        d="M11.4,10.22l8.79-8.79A.84.84,0,0,0,19,.25L10.22,9,1.43.25A.83.83,0,0,0,.25.25a.83.83,0,0,0,0,1.18L9,10.22.25,19a.84.84,0,0,0,0,1.19.82.82,0,0,0,.59.24.84.84,0,0,0,.59-.24l8.79-8.79L19,20.19a.84.84,0,0,0,.59.24.84.84,0,0,0,.6-1.43Z"
      />
    </svg>
  );
};

export default CloseIcon;
