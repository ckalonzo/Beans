import React from "react";

const Picture = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="avatar mx-auto white">
            <img
              src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
              alt="avatar mx-auto white"
              className="rounded-circle img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 -ta_mt-30">
          <input
            accept="image/*"
            //className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default Picture;
