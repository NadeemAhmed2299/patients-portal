import USACities from './data/usCities';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//const usaPhoneRegex = /^(\+1\s?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
const usaPhoneRegexRelaxed = /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function isValidUSAPhoneNumber(number: string): boolean {
  return usaPhoneRegexRelaxed.test(number);
}

export const formatPhoneNumber = (value: string): string => {
  let numbers = value.replace(/\D/g, '');
  if (numbers.length > 0) {
    if (numbers.length <= 3) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    }
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  }
  return value;
};

export function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}