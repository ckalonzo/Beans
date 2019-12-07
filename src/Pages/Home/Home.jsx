import React, { Component } from "react";
import Hero from "../Global/Layout/Hero";
import HowItWorks from "../Global/Layout/Hiw";
import ContentPanelImg from "../Global/Layout/content-panel--img";
import Join from "../Global/Layout/Join";
import "../Global/scss/ta-root.scss";
import Layout2 from "../Global/Component/Navigation/Layout/Layout2";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Layout2 /> */}
        <Hero />
        <HowItWorks />
        <ContentPanelImg />
        <Join />
      </div>
    );
  }
}

export default Home;
