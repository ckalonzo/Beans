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

    render() {
        const { values, handleChange } = this.props;
        const size = this.state.size;
        return (
            <React.Fragment>
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
                                <select defaultvalue={values.service} style={{ width: 300 }} onChange={handleChange('service')}>
                                    <option value="Junk Removal">Junk Removal</option>
                                    <option value="Cleaner Service">Cleaner Service</option>
                                </select>
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
                </div>
            </React.Fragment>



        );
    }
}
