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
        
          <br />
          <input style={{ display: 'none' }} type="file" onChange={this.props.handleChangeAttachments} ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click()}>Choose File</button>
         <button onClick={this.handleUpload}>Upload</button>
          <br />
          
        </div>

        <div className="row">
          <div className="mx-auto">
            <button
              type="button"
              className="btn btn-primary backbutton"
              onClick={this.back}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
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
