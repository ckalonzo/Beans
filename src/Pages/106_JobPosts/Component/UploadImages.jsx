import React, { Component } from "react";
import { Form, Upload, Icon, message, Button } from "antd";

const Dragger = Upload.Dragger;
const FormItem = Form.Item;

const props = {
    name: "file",
    multiple: true,
    action: "//jsonplaceholder.typicode.com/posts/",
    onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};

class UploadImages extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        size: 'large',
    };
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { handleChange, attachments } = this.props;
        const size = this.state.size;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5 mt-5">
                            <h1>Please Upload Images</h1>
                            <h6>Uploading Images is optional but highly recommended to help providers recieve more accruate bids </h6>
                        </div>
                    </div>
                </div>
                <FormItem>
                    {getFieldDecorator("picture", {
                        rules: [
                            {
                                required: true,
                                message: "Please upload picture!"
                            }
                        ]
                    })(
                        <Dragger {...props} id={attachments} value={attachments} onChange={handleChange('attachments')}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
              </p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from
                                uploading company data or other band files
              </p>
                        </Dragger>
                    )}
                </FormItem>
                <div className="row">
                    <div className="mx-auto">
                        <Button.Group size={size}>
                            <Button type="primary" onClick={this.back} className="float-left">
                                <Icon type="left" />Back
                                </Button>
                            <Button type="primary" onClick={this.continue}>
                                Continue <Icon type="right" />
                            </Button>
                        </Button.Group>
                    </div>
                </div>
            </div>
        );
    }
}

const ImagesForm = Form.create({})(UploadImages);

export default ImagesForm;
