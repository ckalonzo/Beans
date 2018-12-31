import React, { Component } from "react";
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import Hero from "../Global/Layout/Hero";
import HowItWorks from "../Global/Layout/Hiw";


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <HowItWorks />
                <Footer />
            </div>

        );

    }
}

export default Home;