Array.prototype.reducePoly = function (...args) {
  let initialVal = args[1] ?? this[0];
  let reducer = args[0];
  for (let i = 1; i < this.length; ++i) {
    let currentVal = this[i];
    // prevVal, currentVal, index of current element, original array
    initialVal = reducer(initialVal, currentVal, i, this);
    console.log(initialVal, currentVal);
  }
  return initialVal;
};

const sum = [1, 2, 3, 4, 5].reducePoly((prev, curr) => prev + curr);
console.log(sum);
