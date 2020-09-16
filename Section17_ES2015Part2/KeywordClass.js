// keyword 'class'
// Objectives:
// refactor object oriented code to use the keywords: class, extends and super
// understand how to use new data structures in ES2015
// refactor asynchronous code using native Promise constructor
// create functions that use generators to pause and resume execution
// ES2015 methods for copying objects, converting array-like objects into arrays
// NaN issue handling
// ES2016 features
// ES2017 async functions, new string methods, and refactoring code
// spread / rest object operator


// ES2015 new reserved keyword 'class'
// creates a constant - cannot be redeclared
// abstraction of constructor functions and prototypes. No native OOP support
// does not hoist
// use 'new' keyword to create objects

// ES5: create constructor function. use 'new' to create new objects
function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
var sammy = new Student("Sammy", "So");

// ES2015 Object Oriented
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
var sammy = new Student("Sammy", "So"); // same as ES5
// use 'class' keyword instead of 'function'
// use 'constructor' is to instantiate or create a new object instance creation function
// 'new' keyword to create new objects, same as ES5


// ES5 Instance Methods
function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype.sayHello = function(){
  return "Hello " + this.firstName + " " + this.lastName;
}
// shared methods and properties are placed onto function's prototype property

// ES2015 Instance Methods
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
// Place shared methods inside class keyword declaration
// same behavior as shared prototype object methods
// no 'function' keyword (similar to object shorthand notation)

// ES5
Student.isStudent = function(obj){
  return obj.constructor === Student;
}
// ES2015
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj){
    return obj.constructor === Student;
  }
}
