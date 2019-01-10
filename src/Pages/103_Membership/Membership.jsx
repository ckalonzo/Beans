import React, { Component } from 'react';
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import MembershipMockup from "../103_Membership/component/MembershipMockup";

class Membership extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MembershipMockup />

                <Footer />

            </div>

        );
    }
}

export default Membership;