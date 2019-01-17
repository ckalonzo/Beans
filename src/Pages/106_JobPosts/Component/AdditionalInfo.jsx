import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Collapse } from 'antd';
import LocationOfJob from "./AdditionalInfo/LocationOfJob";
import LargeItemInvolved from "../Component/LargeItemInvolved";
import AvaliableTimeDate from "../Component/AvaliableTimeDate";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import LocationPage from "./AdditionalInfo/LocationOfJob";


const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class AdditionalInfo extends Component {
    render() {
        return (
            <div className="className container">
                <div className="row">
                    <div className="col-12">
                        <Collapse accordion>
                            <Panel header="This is panel header 1" key="1">
                                <LocationPage />
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>,
                    </div>
                </div>
            </div>
        )
    }
}
