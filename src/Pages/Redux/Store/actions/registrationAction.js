import { CONTRACTOR_REGISTRATION } from "./actionTypes/ta-actionTypes";

export const contractorRegistration = (
  step,
  firstName,
  lastName,
  actualSsn,
  maskedSsn,
  ssnLocked,
  service,
  email,
  image,
  url,
  progress,
  name,
  address,
  city,
  state,
  zipCode
) => {
  return {
    type: CONTRACTOR_REGISTRATION,
    step: step,
    firstName: firstName,
    lastName: lastName,
    actualSsn: actualSsn,
    maskedSsn: maskedSsn,
    ssnLocked: ssnLocked,
    service: service,
    email: email,
    image: image,
    url: url,
    progress: progress,
    name: name,
    address: address,
    city: city,
    state: state,
    zipCode: zipCode
  };
};
