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
    const {
      handleChangeAttachments,
      files,
      handleOnDrop,
      imagefile,
      input
    } = this.props;
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
        <DropZone
          accept="image/jpeg, image/png, image/gif, image/bmp"
          className="upload-container"
          onDrop={handleOnDrop}
          onChange={handleChangeAttachments.bind(files)}
        />

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
