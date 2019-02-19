import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Select, Button, Icon } from 'antd';




const Option = Select.Option;

export default class TypeOfJob extends Component {
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
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    handleChange(e) {
        let id = e.target.value;
        this.props.onChange(id);
    }
    render() {
        const { values, service } = this.props;
        const size = this.state.size;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5 mt-5">
                            <h1>What Type of Job you need?</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5">
                            <React.Fragment>
                                <Select defaultvalue={values.service} style={{ width: 300 }} onChange={this.handleChange}>
                                    <Option id="option1" value="Junk Removal">Junk Removal</Option>
                                    <Option id="option2" value="Cleaner Service">Cleaner Service</Option>
                                </Select>
                            </React.Fragment>
                        </div>
                    </div>
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
                <div>



                </div>,

            </div>
        );
    }
}
