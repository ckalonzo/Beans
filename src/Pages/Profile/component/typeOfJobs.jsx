import React, { Component } from 'react'
import { MDBBadge } from "mdbreact";



class TypeOfJobs extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <MDBBadge pill color="light">Junk Removal</MDBBadge>
                        <MDBBadge pill color="light">Lawn Service</MDBBadge>


                        <Chip label="Junk Removal" className={classes.chip} />
                        <Chip label="Lawn Service" className={classes.chip} />

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default TypeOfJobs;