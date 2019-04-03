import React, { Component } from 'react'
import { Statistic, Row, Col, Button } from 'antd';

export default class NumberofJobs extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="row">
                        <div className="col">
                        <Statistic title="# of Jobs" value={112893} />
                        </div>
                    </div>
                    </React.Fragment>
           
        )
    }
}
