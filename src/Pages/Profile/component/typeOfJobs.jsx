import React, { Component } from 'react'
import { Tag } from 'antd';

export default class TypeOfJobs extends Component {
    render() {
        return (
            <div >
                <div className="container">
                    <Tag color="magenta">Junk Removal</Tag>
                    <Tag color="red">Lawn Service</Tag>
                </div>


            </div>
        )
    }
}
