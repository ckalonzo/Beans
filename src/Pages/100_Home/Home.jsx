import React, { Component } from "react";
import Navigation from "./component/Navigation";
import Navbar from "./component/Navbar";
import Footer from "../Global/Component/Footer"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section>
                    <div className="container">
                        <h2>Hello World</h2>
                    </div>
                </section>

                <Footer />
            </div>

        );

    }
}

export default Home;