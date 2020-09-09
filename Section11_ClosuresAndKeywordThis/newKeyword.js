// The 'new' keyword
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// use 'new' keyword to set the context of 'this'
var elie = new Person("Elie", "Schoppik");
elie.firstName; // "Elie"
elie.lastName; // "Schoppik"
