let stocks = [true, false, true];

let some = stocks.some(item => item === false);
let every = stocks.every(item => item === true);

console.log(some);  // true
console.log(every); // false
