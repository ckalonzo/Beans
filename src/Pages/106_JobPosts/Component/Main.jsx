import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Css/PostJob.css";
import Budget from "../Component/Budget";
import LocationPage from "./AdditionalInfo/LocationOfJob";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

import { Steps, Button, message, Form } from "antd";
const Step = Steps.Step;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });

        // if (this.state.current == 0) {
        //     this.props.form.validateFieldsAndScroll(["picture"], (err, values) => {
        //         if (!err) {
        //             const current = this.state.current + 1;
        //             // console.log(current)
        //             this.setState({ current });
        //         }
        //     });
        // }
    }
    prev() {
        const current = this.state.current - 1;
        // console.log(current)
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        let steps = [
            {

                content: <IntroPostJob form={this.props.form} />
            },
            {

                content: <TypeOfJob form={this.props.form} />
            },
            {

                content: <UploadImages form={this.props.form} />
            },
            {

                content: <AdditionalInfo form={this.props.form} />
            },
            {

                content: <Budget form={this.props.form} />
            },
            {
                title: "Last",
                content: <Third form={this.props.form} />
            }
        ];
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" class="avatar"></img>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    {steps.map(({ title, content }, i) => (
                        <div
                            key={title}
                            className={i === this.state.current ? "foo fade-in" : "foo"}
                        >
                            {content}
                        </div>
                    ))}
                    <div className="row">
                        <div className="mx-auto mb-5">
                            <div className="steps-action">
                                {this.state.current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                        Next
            </Button>
                                )}
                                {this.state.current === steps.length - 1 && (
                                    <Button
                                        type="primary"
                                        onClick={() => message.success("Processing complete!")}
                                    >
                                        Done
            </Button>
                                )}
                                {this.state.current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Previous
            </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MainForm = Form.create({})(Main);

export default MainForm;
