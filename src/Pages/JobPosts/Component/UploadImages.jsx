import React, { Component } from "react";
import DropZone from "react-dropzone";
import $ from 'jquery'

//constants
const UPLOAD_HEADER_TEXT = " Uploading Images is optional but highly recommended to help providers recieve more accruate bids";
const UPLOAD_SUBHEADER_TEXT = "\nThe Images must be in a file format of a .jpeg or .png and the size should be " + "300px X 300px.";
const UPLOAD_TEXT = "Upload Files"
class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'image/png',
      originalImageUrl: '',
      resizedImageUrl: '',
      completed: false
    };
    this.onChangeUpload = this.onChangeUpload.bind(this);
    this.onclickLabel = this.onclickLabel.bind(this);

  }
  
  componentDidUpdate() {
    const { resizedImageUrl, completed } = this.state;
    if (resizedImageUrl && !completed) {
      this.setState({ completed: true });
    }
  }

  loadSource(src) {
    const deferred = $.Deferred();
    const sprite = new Image();
    sprite.onload = function () { 
      deferred.resolve();
    };
  }
  resizeImage(img, type) {
    const { onChangePhoto } = this.props;
    const { resizeCanvas } = this.refs;
    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;

    var ctx = resizeCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let width = img.width;
    let height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    resizeCanvas.width = width;
    resizeCanvas.height = height;
    ctx = resizeCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    const dataUri = resizeCanvas.toDataURL(type);
    this.setState({ resizedImageUrl: dataUri, type: type });
    onChangePhoto(dataUri);

  }

  onChangeUpload(event) {
    let extension = event.target.files[0].type;
    if (extension.toLowerCase() === "image/jpeg" || extension.toLowerCase() === "image/png") {
      event.preventDefault();
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({ completed: false });
        const img = new Image();
        img.onload = () => {
          this.resizeImage(img, file.type);
        };
        img.src = reader.result;
      }
      this.setState({error:null})
    } else {
      this.setState({error:"File type must be .jpeg or .png"})
    }
  }
  onclickLabel(event) {
    const { imageInput } = this.refs;
    if (event.key === 'Enter') {
      imageInput.click();
    }
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  renderImage(resizedImageUrl, remotePhotoData) {
    let image = null;

    if (remotePhotoData) {
      image = remotePhotoData;
    } else if (resizedImageUrl) {
      image = resizedImageUrl;
    } else {
 //     image = defaultFile
    }
    
    return (
      <img src={image} alt="customer-files" className="logo-preview"/>
    )
  }
  errorMessage() {
    if (this.state.error) {
      return (
        <div id="uploadError" className="alert alert-danger border border-danger">{this.state.error}</div>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    const {resizedImageUrl} = this.state
    const { handleChangeAttachments, handleUpload, values,remotePhotoData } = this.props;
    return (
      <div>
        <div className="container" id="customer-picture">
          <div className="row">
            <div className="col-12  offset-0  text-center mb-5 mt-5">
              <h3 style={{
                display:'inline-flex'
              }}>Please Upload Images</h3>
              <div className="customer-info-container">
                <p>{UPLOAD_HEADER_TEXT}</p>
                <p>{UPLOAD_SUBHEADER_TEXT}</p>
              </div>
              <div className="photo-upload-container">
                {this.renderImage(resizedImageUrl, remotePhotoData)}
                <div className="photo-upload-buton-container">
                  <label
                    className="btn-secondary" onKeyPress={this.onClickLabel} tabIndex='0'>
                    <input ref="imageInput" type="file" accept="image/jpeg, image/jpg, image/png" className="file-input-field"
                      onChange={this.onChangeUpload} tabIndex="-1" aria-describedby="uploadError"/>{UPLOAD_TEXT}
                    </label>
                </div>
              </div>
              {this.errorMessage()}
              <cavas className="resize-canvas" ref="resizeCanvas" width={300} height={300}/>
            </div>)
          </div>
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
