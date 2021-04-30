function checkAge(age) {
  if (age > 18) {
    return true;
  } else { // убрав else абсолютно ничего не изменится
    // ...
    return confirm('Родители разрешили?');
  }
}