function doubleAndFilter(arr){
  return arr.map(function(value){
    return value * 2;
  }).filter(function(value){
    return value % 3 === 0;
  })
};
doubleAndFilter([5,10,15,20]); // [30]

var doubleAndFilter = arr => arr.map(val => val*2).filter(num => num % 3 === 0);

// arrow functions do not have own 'this' keyword, will reference outer 'function's keyword 'this'.
// arrow functions 'this' from enclosing context

var object = {
  firstName: "Sammy",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hello " + this.firstName);
    }, 1000);
  }
}
object.sayHi(); // "Hello undefined"

var bindObject = {
  firstName: "Sammy",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hello " + this.firstName);
    }.bind(this), 1000);
  }
}
bindObject.sayHi(); // "Hello Sammy"


// using arrow function with this to eliminate bind (this -> enclosing object context)
var arrowObject = {
  firstName: "Sammy",
  sayHi: function(){
    setTimeout(() => {
      console.log("Hello " + this.firstName);
    }, 1000);
  }
}
arrowObject.sayHi(); // "Hello Sammy"

// this inside of sayHi function -> object
// use sayHi function so it retains object 'this', which passes into =>


// arrow functions do not get their own keyword arguments either
var add = (a,b) => {
  return arguments;
}
add(2,4); // ReferenceError: arguments is not defined
// arguments keyword can be accessed only if inside of another function using keyword function
// referencing that function's arguments parameter
function outer() {
  return innerFunction = () => {
    return arguments;
  }
}
outer(1)(2); // only prints out [1]


// when NOT to use arrow functions
// as methods in objects: incorrect value of keyword this
var instructor = {
  firstName: "Colt",
  sayHi: () => `Hello ${this.firstName}`;
}
instructor.sayHi(); // "Hello undefined"
