Array.prototype.filterPoly = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; ++i) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const vowels = ["b", "c", "a", "e"].filterPoly(
  (char) => char === "a" || char === "e"
);
console.log(vowels);
