//allows numeric digits only
export const digitsOnlyRegex = input => {
  return input.replace(/[^0-9]/g, "");
};

//for 9-digit zipcodes and phone numbers
export const digitsAndDashesOnlyRegex = input => {
  return input.replace(/[^0-9]/g, "");
};

//allows numeric digits and /

export const formattedDateRegex = input => {
  return input.replace(/[^0-9\\/]/g, "");
};

export const stripInvalidChars = input => {
  return input.replace(
    /[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{]\[}`~]*/g,
    ""
  );
};

export const areAllCharactersTheSame = input => {
  return /^(\d)\1*$/.test(input);
};
