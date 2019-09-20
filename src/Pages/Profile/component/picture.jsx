import React, { Component } from "react";

const styles = {
  input: {
    display: "none"
  }
};

class Picture extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="avatar mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                alt="avatar mx-auto white"
                className="rounded-circle img-fluid"
              />
            </div>
            <input
              accept="image/*"
              //className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <button type="button" className="btn btn-primary">
              Change
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Picture;
