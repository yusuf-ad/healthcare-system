import { phone } from "phone";

export function isValidPhone(phoneNumber) {
  return phone(phoneNumber, { country: "TR" }).isValid;
}
