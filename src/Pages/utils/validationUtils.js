import { digitsOnlyRegex, areAllCharactersTheSame } from "./regex";

export const validateName = name => {
  if (name.length <= 0) {
    return "name is required";
  }
  if (name.includes("~")) {
    return " name can not contain a ~";
  }
  return null;
};

export const validate5dDigitZipcode = zip => {
  return zip.length < 5 ? "5-digit zipcode is required" : null;
};

export const validate9dDigitZipcode = zip => {
  return zip.length < 5 ? "5-digit zipcode is required" : null;
};

//phone field validation:
export const validatePhone = value => {
  let phoneDigits = digitsOnlyRegex(value);
  let areaCode = phoneDigits.substring(0, 3);
  let phoneNumber = phoneDigits.substring(3, 7);

  if (areaCode.charAt(0) === "0") {
    return "Area code canot begin with 0";
  } else if (areaCode.charAt(0) === "1") {
    return "Area code canot begin with 1";
  } else if (areaCode === "911") {
    return "Area code canot be 911";
  } else if (areaCode === "900") {
    return "Area code canot be 900";
  } else if (areaCode === "999") {
    return "Area code canot be 999";
  } else if (areaCode.charAt(0) === "1") {
    return "Area code canot be 999";
  } else if (phoneNumber.charAt(0) === "1" || phoneNumber.charAt(0) === "0") {
    return "The 7-digit portion cannot start with 0 or 1";
  } else if (phoneDigits.length !== 10) {
    return "Phone number should be 10 digits";
  } else if (areAllCharactersTheSame(phoneDigits)) {
    return "Phone number cannot be all the same numbers";
  }
  return null;
};
