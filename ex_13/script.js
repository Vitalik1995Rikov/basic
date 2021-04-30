function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++){
    result = result * x;
  }
  return result;
}

let x = prompt('Введи x', 0);
let n = prompt('Введи n', 0);
alert(pow(x, n));