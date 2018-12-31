import React, { Component } from "react";
import Navigation from "./component/Navigation";
import Navbar from "./component/Navbar";

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


            </div>

        );

    }
}

export default Home;