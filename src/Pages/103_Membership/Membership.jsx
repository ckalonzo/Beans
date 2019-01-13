import React, { Component } from 'react';
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import MembershipMockup from "../103_Membership/component/MembershipMockup";
import Testimonial from "../103_Membership/component/Testmonials";
import Prices from "../103_Membership/component/Price-Table";
import SingleBid from "../103_Membership/component/Single-bid-table";

class Membership extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MembershipMockup />
                <Testimonial />
                <SingleBid />
                <Prices />
                <Footer />

            </div>

        );
    }
}

export default Membership;