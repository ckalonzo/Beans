import React, { Component } from "react";
import Hero from "../Global/Layout/Hero";
import HowItWorks from "../Global/Layout/Hiw";
import ContentPanelImg from "../Global/Layout/content-panel--img";
import Join from "../Global/Layout/Join";

class Home extends Component {
    render() {
        return (
            <div>

                <Hero />
                <HowItWorks />
                <ContentPanelImg />
                <Join />

            </div>

        );

    }
}

export default Home;