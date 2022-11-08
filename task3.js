let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let three = someNumbers.some(function (number) {
  return number % 3 == 0;
});

let five = someNumbers.some(function (number) {
  return number % 5 == 0;
});

let sixty = someNumbers.some(function (number) {
  return number % 60 == 0;
});

let ninety = someNumbers.some(function (number) {
  return number % 90 == 0;
});

console.log(three, five, sixty, ninety);
