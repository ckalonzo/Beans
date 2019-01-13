import React, { Component } from 'react';
import MembershipMockup from "../103_Membership/component/MembershipMockup";
import Testimonial from "../103_Membership/component/Testmonials";
import Prices from "../103_Membership/component/Price-Table";
import SingleBid from "../103_Membership/component/Single-bid-table";

class Membership extends Component {
    render() {
        return (
            <div>
                <MembershipMockup />
                <Testimonial />
                <SingleBid />
                <Prices />
            </div>

        );
    }
}

export default Membership;