export function zipCodeValidator(zip, ctx, input, cb) {
  let zipCodePattern = /^\d{5}([-]?\d{4})?$/;
  let errorMessage = "";

  if (zip === "") errorMessage = "Enter a valid Zip Code";
  else if (!zipCodePattern.test(zip))
    errorMessage = "Zipcode should only be 5 or 9 digits.";
  if (errorMessage === "") cb(true);
  else {
    this.setState({
      zipCodeMessage: errorMessage
    });
    cb("");
  }
  return;
}
