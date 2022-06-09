function memoize(fn) {
  let cache = {}

  return function() {
    const args = JSON.stringify(arguments)

    if(cache[args]) {
      return cache[args]
    } else {
      const value = fn.apply(this, arguments)
      cache[args] = value

      return value;
    }
  }
}

const factorial = (n) => (n <= 1) ? 1: factorial(n-1)*n
const mfun = memoize(factorial)

console.time('start normal factorial')
console.log(factorial(20))
console.timeEnd('start normal factorial')

console.time('memo')
console.log(mfun(20))
console.timeEnd('memo')
