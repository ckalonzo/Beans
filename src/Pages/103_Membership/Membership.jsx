import React, { Component } from 'react';
import MembershipMockup from "../103_Membership/component/MembershipMockup";
import Testimonial from "../103_Membership/component/Testmonials";
import MembershipTable from "./component/membership-Table";
import SingleBid from "../103_Membership/component/Single-bid-table";



class Membership extends Component {


    render() {
        return (
            <div>
                <MembershipMockup />
                <Testimonial />
                <SingleBid />
                <MembershipTable />
            </div>

        );
    }
}
// Takes the state in our cartReducer and pass it as props in our file
export default (Membership);