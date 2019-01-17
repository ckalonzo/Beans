import React, { Component } from "react";
import "../Css/PostJob.css";
import StreetAddress from "./LocationOfJobComponent/StreetAddress"
export default class LocationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value } = this.props;

        return (
            <div>
                <StreetAddress />

            </div>
        )
    }
}

