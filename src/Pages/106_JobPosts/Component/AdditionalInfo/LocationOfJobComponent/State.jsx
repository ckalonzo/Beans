import React, { Component } from "react";
import { Input, Select } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;
const Option = Select.Option;

export default class statee extends Component {

    render() {
        const { handleChange, statee, values } = this.props;
        return (
            <div>

                <InputGroup size="large">

                    <Select defaultValue={values.statee} onChange={handleChange('statee')} id={statee}>
                        <Option value="AL">AL</Option>
                        <Option value="AK">AK</Option>
                        <Option value="AZ">AZ</Option>
                        <Option value="AR">AR</Option>
                        <Option value="CA">CA</Option>
                        <Option value="CO">CO</Option>
                        <Option value="CT">CT</Option>
                        <Option value="DE">DE</Option>
                        <Option value="DC">DC</Option>
                        <Option value="FL">FL</Option>
                        <Option value="GA">GA</Option>
                        <Option value="HI">HI</Option>
                        <Option value="ID">ID</Option>
                        <Option value="IL">IL</Option>
                        <Option value="IN">IN</Option>
                        <Option value="IA">IA</Option>
                        <Option value="KS">KS</Option>
                        <Option value="KY">KY</Option>
                        <Option value="LA">LA</Option>
                        <Option value="ME">ME</Option>
                        <Option value="MD">MD</Option>
                        <Option value="MA">MA</Option>
                        <Option value="MI">MI</Option>
                        <Option value="MN">MN</Option>
                        <Option value="MS">MS</Option>
                        <Option value="MO">MO</Option>
                        <Option value="MT">MT</Option>
                        <Option value="NE">NE</Option>
                        <Option value="NV">NV</Option>
                        <Option value="NH">NH</Option>
                        <Option value="NJ">NJ</Option>
                        <Option value="NM">NM</Option>
                        <Option value="NY">NY</Option>
                        <Option value="NC">NC</Option>
                        <Option value="ND">ND</Option>
                        <Option value="OH">OH</Option>
                        <Option value="OK">OK</Option>
                        <Option value="OR">OR</Option>
                        <Option value="PA">PA</Option>
                        <Option value="RI">RI</Option>
                        <Option value="SC">SC</Option>
                        <Option value="SD">SD</Option>
                        <Option value="TN">TN</Option>
                        <Option value="TX">TX</Option>
                        <Option value="UT">UT</Option>
                        <Option value="VT">VT</Option>
                        <Option value="VA">VA</Option>
                        <Option value="WA">WA</Option>
                        <Option value="WV">WV</Option>
                        <Option value="WI">WI</Option>
                        <Option value="WY">WY</Option>
                    </Select>

                </InputGroup>

            </div>
        )
    }
}

