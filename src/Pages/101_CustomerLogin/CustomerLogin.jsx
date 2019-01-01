import React, { Component } from "react";
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import Login from "../101_CustomerLogin/Component/Login"

class CustomerLogin extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Login />
                <Footer />
            </div>

        );

    }
}

export default CustomerLogin;