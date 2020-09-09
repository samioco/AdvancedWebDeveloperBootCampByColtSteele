// keyword this

// 1st rule: Global
// global or window

console.log(this); // window
rfunction whatIsThis(){
  return this;
}
whatIsThis(); // window

function variablesInThis(){
  this.person = "Elie";
}
variablesInThis() // the keyword this inside the function is the window
console.log(person); // Elie


function mistake(){
  this.badIdea = "oops!" // creates a global var inside a function
}
mistake()
badIdea // "oops!"

use strict // prevents creating global variables inside functions using this

// 2nd rule: Implicit/Object
// this: closest parent object when called from inside a function

var person = {
  firstName: "Elie",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  }
}
person.sayHi(); // "Hi Elie"
person.determineContext(); // true


var person = {
  firstName: "Elie",
  determineContext: this;
}
person.determineContext; // window

// A keyword 'this' is defined when a function is run!
// There is not a function being run here to create a new value of the keyword 'this' so the value of 'this is the window'


var person = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  },
  dog: {
    sayHello: function(){
      return "Hello " + this.firstName;
    },
    determineContext: function(){
      return this === person;
    }
  }
}
person.sayHi(); // "Hi Colt"
person.determineContext(); // true
person.dog.sayHello(); // "Hello undefined"
person.dog.determineContext(); // false


// 3rd rule: Explicit Binding
// call / apply / bind

person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); // true
// Using call worked!
// Notice that we do NOT invoke sayHello or determineContext


var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var elie = {
  firstName: "Elie",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}


var elie = {
  firstName: "Elie",
}
colt.sayHi(); // Hi Colt
colt.sayHi.call(elie); // Hi Elie
// much better!


function sayHi(){
  return "Hi " + this.firstName;
}
var colt = {
  firstName: "Colt"
}
var elie = {
  firstName: "Elie"
}
sayHi.call(colt); // Hi Colt
sayHi.call(elie); // Hi Elie



var divs = document.getElementsByTagName('div');
divs.filter // undefined

var divsArray = [].slice.call(divs);
divsArray.prototype.slice.call(divs)
// you might also see this as Array.prototype.slice.call(divs)

divsArray.filter(function(val){
  return val.innerText === "Hello"
});
// We sliced something that is not actually an array.
// In Javascript, slice will not work on all data types, but it works on array-like objects


// Apply
sayHi.call(colt); // Hi Colt
sayHi.apply(elie); // Hi Elie

function addNumbers(a,b,c,d){
  return this.firstName + " just calculated " + (a+b+c+d);
}

addNumbers.call(elie,1,2,3,4); // Elie just calculated 10
addNumbers.apply(elie,[1,2,3,4]); // Elie just calculated 10


var nums = [5,7,1,4,2];
// Math.max([value1[, value2[, ...]]])
Math.max(nums); // NaN (not a number)
// apply will spread out the values of an array passed in as an argument
Math.max.apply(this, nums); // 7

function sumValues(a,b,c){
  return a+b+c;
}
var values = [4,1,2];
sumValues(values); // "4,1,2undefinedundefined"
sumValues.apply(this,values); // 7


// bind
function addNumbers(a,b,c,d){return this.firstName + " just calculated " + (a+b+c+d);}
var elie = {firstName: "Elie"}
var elieCalc = addNumbers.bind(elie,1,2,3,4); // function(){}...
elieCalc(); // Elie just calculated 10

// With bind - we do not need to know all the arguments up front
var elieCalc = addNumbers.bind(elie,1,2); // function(){}...
elieCalc(3,4); // Elie just calculated 10


setTimeout(function(){
  console.log('Hello World!');
}, 20000)


var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }, 1000);
  }
}
// since this is called at a later point in time due to setTimeout, it will not refer to the parent object
// it will refer to the global object window
colt.sayHi(); // Hi undefined (1000 ms later)

var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }.bind(this), 1000);
  }
}
// bind this to setTimeout function in declaration
colt.sayHi(); // Hi Colt (1000 ms later)
