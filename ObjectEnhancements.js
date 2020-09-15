// Object Shorthand Notation

var firstName = "Sammy"
var lastName = "So"

// ES5
var student = {
  firstName: firstName,
  lastName: lastName
}

// ES2015
// if keys and values have same name, do not have to repeat declaration
var newStudent = {
  firstName,
  lastName
}

// Object Methods
// ES5
var ES5 = {
  sayHello: function(){
    return "Hello!";
  }
}

//ES2015 - do NOT use arrow functions here!
var ES2015 = {
  sayHello(){
    return "Hello!";
  }
}

// Computed Property Names: computer the variable value to be the key (property name) for an object.
// ES5
var firstName = "Sammy";
var instructor = {};
instructor[firstName] = "That's me!";
instructor.firstName; // undefined
instructor.Sammy; // "That's me!";

// ES2015
var firstName = "Sammy";
var obj = {
  [firstName]: "That's me!"
}
obj; // {Sammy: "That's me!"}
obj[firstName] // "That's me!"
obj.Sammy // "That's me!"
