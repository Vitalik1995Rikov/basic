// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }


function checkAge(age) {
  return (age > 18) ? true : confirm('Родители?')
}

console.log(checkAge(17));