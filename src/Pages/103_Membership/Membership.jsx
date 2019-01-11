import React, { Component } from 'react';
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import MembershipMockup from "../103_Membership/component/MembershipMockup";
import Testimonial from "../103_Membership/component/Testmonials";
import Prices from "../103_Membership/component/Price-Table";

class Membership extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MembershipMockup />
                <Testimonial />
                <Prices />
                <Footer />

            </div>

        );
    }
}

export default Membership;