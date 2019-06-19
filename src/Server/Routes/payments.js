/* eslint-disable no-sequences */
var express = require("express");
const cors = require("cors");
var app = express();

const stripe = require("stripe")("sk_test_AFV7PiH6h14RmMd93k1zGv6F005tkBXHks");

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
// Using Express
app.post('/charge', (req, res) => {
    const amount = 2500;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer => stripe.charges.create({
            amount,
            description: 'Web Development Ebook',
            currency: 'usd',
            customer: customer.id
        }))
        .then(charge => res.render('success'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// app.post("/api/stripe", function(req, res, next) {
//   const stripeToken = req.body.stripeToken;
//   // eslint-disable-next-line no-unused-expressions
//   stripe.charges.create({
//     amount: 999,
//     currency: "usd",
//     description: "Example charge",
//     source: stripeToken
//   }),
//     function(err, charge) {
//       console.log("charge");
//       console.log(charge);
//       if (err) {
//         res.send({
//           success: false,
//           message: "Error"
//         });
//       } else {
//         res.send({
//           success: true,
//           message: "Error"
//         });
//       }
//     };
//   app.listen(8000, error => {
//     if (error) throw error;
//     console.log("stripe Server running on port " + 8000);
//   });
// });

//const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// };
// const paymentApi = app => {
//   app.get("/", (req, res) => {
//     res.send({
//       message: "Hello Stripe checkout server!",
//       timestamp: new Date().toISOString()
//     });
//   });
//   app.post("/", (req, res) => {
//     const body = {
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "usd"
//     };
//     stripe.charges.create(body, stripeChargeCallback(res));
//   });
//   return app;
// };
// module.exports = paymentApi;
