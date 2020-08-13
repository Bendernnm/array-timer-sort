require('.');

(async () => {
  const array = [20, 5, 100, 1, 90, 200, 40, 29];

  const sorted = await array.timerSort();

  console.log(sorted);  // [ 1,  5,  20,  29, 40, 90, 100, 200 ]
})();
