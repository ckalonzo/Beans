import React, { Component } from 'react'
import { Tag } from 'antd';

export default class TypeOfJobs extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="row">
                        <div className="col">
                    <Tag color="magenta">Junk Removal</Tag>
                    <Tag color="red">Lawn Service</Tag>
                    </div>
                    </div>

           </React.Fragment>
        )
    }
}
