function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

var firstHouse = House(2,2,1000)
firstHouse; // undefined

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000

// What does 'new' keyword do?
// creates empty object, assigns 'this' to empty object
// adds 'return this' to end of followup function
// adds property onto empty object called "__proto__"
// "__proto__": links prototype property on constructor function to the empty object
// dunder proto property

function Dog(name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name + " barks!");
  }
}
var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);
rusty.bark() // Rusty barks!
fido.bark() // Fido barks!



// Using call / apply

function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Car(make, model, year){
  Vehicle.call(this, make, model, year);
  this.numWheels = 4;
}
function Motorcycle(make, model, year){
  Vehicle.apply(this, [make, model, year]);
  this.numWheels = 2;
}

// without params, using arguments
function Motorcycle(){
  Vehicle.apply(this, arguments);
  this.numWheels = 2;
}

// OOP: object oriented programming based on objects constructed from a blueprint.
// Used to write modular and shareable code

// Languages with built-in OOP: classes, and objects: instances
// Languages without built-in OOP like JavaScript, we mimic classes by using constructor functions
// Create objects using keyword 'new'
// Avoid duplicated code in constructor functions through use of call/apply
