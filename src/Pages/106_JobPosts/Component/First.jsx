import React, { Component } from "react";
import { Form, Upload, Icon, message } from "antd";

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

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <FormItem>
                    {getFieldDecorator("picture", {
                        rules: [
                            {
                                required: true,
                                message: "Please upload picture!"
                            }
                        ]
                    })(
                        <Dragger {...props}>
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
            </div>
        );
    }
}

const FirstForm = Form.create({})(First);

export default FirstForm;
