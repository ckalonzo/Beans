import React, { Component } from "react";
import Navbar from "../Global/Component/Navigation/Layout/Navbar";
import Footer from "../Global/Component/Navigation/Layout/Footer";
import ProviderLogin from "../102_ContractorLogin/Component/ProviderLogin"

class ContractorLogin extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProviderLogin />
                <Footer />
            </div>

        );

    }
}

export default ContractorLogin;