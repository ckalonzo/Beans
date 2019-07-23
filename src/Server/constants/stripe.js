const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_live_MY_SECRET_KEY"
    : "sk_test_AFV7PiH6h14RmMd93k1zGv6F005tkBXHks";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
