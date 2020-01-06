//Patterns
export const EMAIL_PATTERN = /^[+a-zA-Z0-9._-]+@[+a-zA-Z0-9._-]+\.([a-zA-Z]){2,}(-)*([a-zA-Z]*)(-)*([a-zA-Z]*)$/i;
export const PHONE_PATTERN = /^\(?(\d{3})\)?[-]?(\d{3})[- ]?(\d{4})$/;

//Format
export const DATE_PATTERN = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;
export const DOLLAR_TWO_DIGIT_DECIMAL = /(^[0-9]{0,8}\.$)/;
