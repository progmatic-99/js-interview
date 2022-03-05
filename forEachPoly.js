/**
 *
 * @param {*} callback: callback fn to call
 */
Array.prototype.myForEach = function (callback) {
  // this -> refers to the array
  for (let i = 0; i < this.length; ++i) {
    callback(this[i], i, this);
  }
};

const arr = [1, 2, 3, 4];
arr.myForEach((num) => console.log(num * 2));
