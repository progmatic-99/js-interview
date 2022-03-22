const arr = [
  [1, 2],
  [2, 3, 4],
  [5, 6, [7, 8]],
];
const flatArr = [];

const flatten = (arr) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      flatArr.push(element);
    }
  });
};

const flattenReduce = (arr) => {
  newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenReduce(item));
    } else {
      acc = [...acc, item];
    }
    return acc;
  }, []);

  return newArr;
};

console.time("flatten arr");
const a = flattenReduce(arr);
console.timeEnd("flatten arr");

console.log(a);
