import { render } from 'react-dom'
import Styles from './component/Styles'
import { Form, Field } from 'react-final-form'
import Card from './component/Card'
import {injectStripe} from 'react-stripe-elements';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './component/cardUtils'
import React, { Component } from 'react'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Styles>
          <h1>Checkout</h1>
          <h2>Payment Information</h2>

          <Form
            onSubmit={onSubmit}
            render={({
              handleSubmit,
              reset,
              submitting,
              pristine,
              values,
              active
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Card
                    number={values.number || ''}
                    name={values.name || ''}
                    expiry={values.expiry || ''}
                    cvc={values.cvc || ''}
                    focused={active}
                  />
                  <div>
                    <Field
                      name="number"
                      component="input"
                      type="text"
                      pattern="[\d| ]{16,22}"
                      placeholder="Card Number"
                      format={formatCreditCardNumber}
                    />
                  </div>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <Field
                      name="expiry"
                      component="input"
                      type="text"
                      pattern="\d\d/\d\d"
                      placeholder="Valid Thru"
                      format={formatExpirationDate}
                    />
                    <Field
                      name="cvc"
                      component="input"
                      type="text"
                      pattern="\d{3,4}"
                      placeholder="CVC"
                      format={formatCVC}
                    />
                  </div>
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Submit
              </button>
                    <button
                      type="button"
                      onClick={reset}
                      disabled={submitting || pristine}
                    >
                      Reset
              </button>
                  </div>
                  <h2>Values</h2>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )
            }}
          />
        </Styles>
        )
      </div>
    )
  }
}
