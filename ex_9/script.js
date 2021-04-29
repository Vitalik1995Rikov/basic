let number = +prompt('Введи число от 0 до 3', 0);
switch(number) {
  case 0:
    console.log('Вы ввели 0');
    break;
  case 1:
    console.log('Вы ввели 1');
    break;
  case 2:
  case 3:
    console.log('Вы ввели 2 или 3');
    break;
}