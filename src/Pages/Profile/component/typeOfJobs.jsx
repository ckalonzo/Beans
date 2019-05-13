import React, { Component } from 'react'
import { MDBBadge } from "mdbreact";
import { withStyles } from '@material-ui/core/styles';


class TypeOfJobs extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <MDBBadge pill color="light">Junk Removal</MDBBadge>
                        <MDBBadge pill color="light">Lawn Service</MDBBadge>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default TypeOfJobs;