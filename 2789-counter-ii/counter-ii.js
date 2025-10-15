/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCounter = init
    function increment() {
        return ++currentCounter
        }
    function decrement() {
        return --currentCounter
        }
    function reset() {
        currentCounter = init
        return currentCounter
        }
  return { increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */