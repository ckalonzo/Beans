const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_live_MY_PUBLISHABLE_KEY"
    : "pk_test_CxStMAxOuuw4Xz6gCv1vmNUa00QntDzcq0";

export default STRIPE_PUBLISHABLE;
