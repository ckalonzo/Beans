import React from 'react';
import { Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends React.Component {
    render() {
        return (
            <Elements>
                <InjectedCheckoutForm handleResult={this.props.handleResult} />
            </Elements>
        );
    }
}

export default MyStoreCheckout;