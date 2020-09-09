// Prototype Inheritance
// The passing of methods and properties from one class to another

// We don't pass constructors
// We pass prototype property
// Nee danother constructor function to pass properties

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHi = function(){
  return "Hello " + this.firstName + " " + this.lastName;
}
function Student(firstName, lastName){
  return Person.apply(this, arguments);
}
Student.prototype.sayHi = function(){
  return "Hello " + this.firstName + " " + this.lastName;
}

// repetitive
function Student(firstName, lastName){
  return Person.apply(this, arguments);
}

// let's try assigning Person.prototype
Student.prototype = Person.prototype;
var sammy = new Student("Sammy", "So");
sammy.sayHi(); // "Hello Sammy So"

Student.prototype.status = function(){
  return "I am a student";
}

// this new Student prototype should only be accessible by students, not persons
var elie = new Person("Elie", "Schoppik");
elie.status(); // "I am a student"

// previous assignment shared pointers/reference, so they are sharing the same prototype

// Solution: Object.create
// create new function whose first parameter is the new prototype object

function Student(firstName, lastName){
  return Person.apply(this, arguments);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.status = function(){
  return "I am a student!";
}
var elie = new Person('Elie', "S");
elie.status; // undefined
// Success!

// Prototypal Inheritance
// Why not use 'new'?
// Almost same results, but 'new' creates unnecessary properties on the prototype object
// ''new' creates an object with undefined properties just for the prototype

Student.prototype.constructor; // Person
// We want to reset the constructor to reflect the desired new constructor Object after a 'create'
Student.prototype.constructor = Student; // Student
