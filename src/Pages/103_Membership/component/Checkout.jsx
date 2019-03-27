import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
class Checkout extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_12345">
                <MyStoreCheckout />
            </StripeProvider>
        )
    }
}

export default Checkout; 