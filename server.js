const express = require("express");

const app = express();
const cors = require("cors");
app.get("/api/customers", (req, res) => {
  const customers = [{ id: 1, firstName: "John", lastName: "doe" }];
  res.json(customers);
});
const stripe = require("stripe")("sk_test_AFV7PiH6h14RmMd93k1zGv6F005tkBXHks");

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
// Using Express
app.get("/", (req, res) => {
  res.render("index", {
    stripePublishableKey: "pk_test_CxStMAxOuuw4Xz6gCv1vmNUa00QntDzcq0"
  });
});
// Charge Route
app.post("/charge", (req, res) => {
  const amount = 2500;

  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Web Development Ebook",
        currency: "usd",
        customer: customer.id
      })
    )
    .then(charge => res.render("success"));
});
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
const port = 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
