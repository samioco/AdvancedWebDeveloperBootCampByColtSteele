// Objectives

// What is a prototype
// Describe and diagram relationship between __proto__, prototype, and constructor
// Add methods and properties on the prototype object to write more efficient code
// Explain the differences between adding methods and properties to the prototype
// versus the constructor functions// Implement inheritance in JavaScript through the prototype object


// every constructor function has an object property called "prototype", .prototype, __proto__
// every prototype object has a property called "constructor", .constructor
// both point to each other

function Person(name){
  this.name = name;
}
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the new keyword, there is a link between
// object and the prototype property: __proto__
Person.prototype; // Object {constructor: function}
elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// Person.prototype object has property called constructor -> function
Person.prototype.constructor === Person; // true


// Prototype Chain
Person.prototype.isInstructor = true;
elie.isInstructor; // true
colt.isInstructor; // true
// objects accessed prototype properties via __proto__


var arr = []
var arr = new Array
arr.push // function push() { [native code] }
console.dir(arr)
// Array(0)
// length: 0
// __proto__: Array(0)
// ... push: function push() ...

arr.__proto__ === Array.prototype // true

arr.hasOwnProperty('length') // true
arr.hasOwnProperty('foo') // false

// Array(0)
// length: 0
// ... __proto__: Array(0)
// ... ... __proto__: Object
// ... ... ... hasOwnProperty: function Object() ...



function Person(name){
  this.name = name;
  this.sayHi = function(){
    return "Hi " + this.name;
  }
}
elie = new Person("Elie");
elie.sayHi(); // "Hi Elie"

// This works but is inefficient
// Every new object requires a redefine of sayHi function

// Refactor the prototype property
function Person(name){
  this.name = name;
}
Person.prototype.sayHi = function(){
  return "Hi " + this.name;
}
elie = new Person("Elie");
elie.sayHi(); // "Hi Elie"


// Challenge
// Create a constructor function for a Vehicle
// Every object from this constructor should have make, model, year
// Every object should have property isRunning, set to false
// function: turnOn, changes isRunning property to true
// function: turnOff, changes isRunning property to false
// method: honk, returns string "beep" ONLY if isRunning is true

function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
Vehicle.prototype.turnOn = function(){
  this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
  this.isRunning = false;
}
Vehicle.prototype.turnOn = function(){
  if(this.isRunning){
    return "beep!";
  }
}
