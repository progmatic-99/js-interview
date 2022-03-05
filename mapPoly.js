Array.prototype.myMap = function (callback) {
  const array = [];
  for (let i = 0; i < this.length; ++i) {
    // Pass current value, current index, array to callback fn
    array.push(callback(this[i], i, this));
  }
  return array;
};

const newArr = [1, 2, 3, 4, 5].myMap(function (number) {
  return number * 2;
});

console.log(newArr);
