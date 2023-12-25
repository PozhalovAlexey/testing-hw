export default function validateCardNumber(cardNumber) {
  if (cardNumber.length <= 12 || cardNumber.length >= 19) {
    return false;
  }

  let sum = 0;
  let isSecondDigit = cardNumber.length % 2 === 0;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (isSecondDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isSecondDigit = !isSecondDigit;
  }

  return sum % 10 === 0;
}
