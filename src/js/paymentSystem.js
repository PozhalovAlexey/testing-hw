function displayPaymentSystem(cardNumber) {
  document.querySelectorAll('.card-item').forEach((card) => {
    card.forEach((c) =>
      c.classList.add('disabled'))
  });
  const firstIndex = cardNumber.slice(0, 1)
  switch (firstIndex) {
    case '2':
      document.querySelector('.card-mir').classList.remove('disabled');
      alert('Ваша карта относится к платежной системе МИР');
      break;
    case '3':
      document.querySelector('.card-amex').classList.remove('disabled');
      alert('Ваша карта относится к платежной системе American Express');
      break;
    case '4':
      document.querySelector('.card-visa').classList.remove('disabled');
      alert('Ваша карта относится к платежной системе VISA');
      break;
  }
  const twoIndex = cardNumber.slice(0, 2)
  switch (+twoIndex) {
    case 50:
    case 56:
    case 57:
    case 58:
    case 67:
    case 63:
      document.querySelector('.card-maestro').classList.add('active');
      alert('Ваша карта относится к платежной системе Maestro');
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      document.querySelector('.card-mastercard').classList.add('active');
      alert('Ваша карта относится к платежной системе Mastercard');
      break;

    default:
  }
}
