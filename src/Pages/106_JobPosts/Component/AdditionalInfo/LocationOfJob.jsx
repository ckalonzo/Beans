import React, { Component } from "react";
import "../../Css/PostJob.css";
import StreetAddress from "./LocationOfJobComponent/StreetAddress";
import ZipCode from "./LocationOfJobComponent/ZipCode";
export default class LocationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value } = this.props;

        return (
            <div>
                <StreetAddress />
                <ZipCode />
            </div>
        )
    }
}

