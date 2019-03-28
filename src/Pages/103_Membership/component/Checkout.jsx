import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
class Checkout extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_CxStMAxOuuw4Xz6gCv1vmNUa00QntDzcq0">
                <MyStoreCheckout handleResult={this.props.handleResult} />
            </StripeProvider>
        )
    }
}

export default Checkout; 