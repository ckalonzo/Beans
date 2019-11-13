import { oneLineTrim } from "common-tags";

export const cleanString = (value, leadingSpacesOnly = false) => {
  if (typeof value === "string") {
    //need to remove trailing spaces, line breaks, etc.
    let newVal = leadingSpacesOnly ? oneLineTrim(value) : value.trim();

    //need to remove non-UTF-8 characters
    return newVal;
  }

  return value; //if not a string, just return the value
};

export const truncateString = (value, maxChars = 0) => {
  if (typeof value === "string") {
    if (maxChars === 0) {
      return value;
    }
    //else:
    return value.substring(0, maxChars);
  }
  return value; //if not a string, just return the value
};

export const formatPhoneNumberWithDashes = (value, previousValue) => {
  if (value.length >= previousValue.length) {
    if (value.length > 4 && value.charAt(3) != "-") {
      value = value.slice(0, 3) + "-" + value.slice(3);
    }
    if (value.length > 8 && value.charAt(7) != "-") {
      value = value.slice(0, 7) + "-" + value.slice(7);
    }
  }
  return value;
};

function ltrim(str) {
  if (str == null) return str;
  return str.replace(/^\s+/g, "");
}
