/*
 * bind returns a function
 */

Function.prototype.myBind = function (...args) {
  let fn = this;
  let params = args.slice(1);
  return function(...moreParams) {
    fn.apply(args[0], [...params, ...moreParams]);
  }
}

let obj = {
  firstname: 'Shubham',
  lastname: 'Upreti'
}

let printName = function() {
  console.log(`${this.firstname} ${this.lastname}`);
}

const a = printName.myBind(obj)
a()
