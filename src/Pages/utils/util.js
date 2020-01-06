export function valueTrim(value) {
  if (value) {
    value = value.trim();
  }
  return value;
}

export function removeNonUTFChars(value) {
  if (value) {
    value = value.replace(/[^\x20-\x7E]/g, "");
  }
  return value;
}

export function validateNotNull(value) {
  if (typeof value !== "undefined" && value !== null) {
    return value;
  } else {
    return "";
  }
}

export function checkNotNull(value) {
  let rv = true;
  if (value === undefined || value === null || value === "") {
    rv = false;
  }
  return rv;
}

export function checkNull(value) {
  if (value === undefined || value === null || value === "") return true;
  return false;
}

export function isNotNull(value) {
  if (typeof value === "undefined" || value === null) {
    return false;
  }
}
