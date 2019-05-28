import React, { Component } from "react";
import DropZone from "react-dropzone";

class UploadImages extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChangeAttachments, handleUpload, values } = this.props;
    const style = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12  offset-0  text-center mb-5 mt-5">
              <h3>Please Upload Images</h3>
              <h6>
                Uploading Images is optional but highly recommended to help
                providers recieve more accruate bids{" "}
              </h6>
            </div>
          </div>
        </div>
        <div style={style}>
          <progress value={this.props.progress} max="100" />
          <br />
          <input type="file" onChange={this.props.handleChange} />
          <button onClick={this.handleUpload}>Upload</button>
          <br />
          <img
            src={this.props.url || "http://via.placeholder.com/400x300"}
            alt="Uploaded images"
            height="300"
            width="400"
          />
        </div>

        <div className="row">
          <div className="mx-auto">
            <button type="button" class="btn btn-primary" onClick={this.back}>
              Back
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImages;
