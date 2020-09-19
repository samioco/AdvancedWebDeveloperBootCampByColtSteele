// Generators
// special function that can pause execution and resume later
// Created using a '*'
// generator function returns a generator object
// generator object keys: value, done
// value: sent to generator, assigned as a result of 'yield' expression.
// done: boolean returns true on function completion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next();      // "Object { value: 1, done: false }"
g.next();      // "Object { value: 2, done: false }"
g.next();      // "Object { value: 3, done: false }"
g.next();      // "Object { value: undefined, done: true }"


// Async Generators
// use generators to pause asynchronous code
function* getMovieData(movieName){
  console.log('starting');
  yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
    console.log('ending');
}
// returned value is a promise, move on to resolve it
var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));
