import React, { Component } from "react";
import MembershipMockup from "../Membership/component/MembershipMockup";
import Testimonial from "../Membership/component/Testmonials";
import MembershipTable from "../Membership/component/membership-Table";
import SingleBid from "../Membership/component/Single-bid-table";

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
export default Membership;
