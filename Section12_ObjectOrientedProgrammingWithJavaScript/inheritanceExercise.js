// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"
Vehicle.prototype.start = function(){
  return "VROOM!";
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property
/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/
Vehicle.prototype.toString = function(){
  return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
}


// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype
function Car(){
  Vehicle.apply(this, arguments);
  this.numWheels = 4;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype
function Motorcycle(){
  Vehicle.apply(this, arguments);
  this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

// RECAP

// Every time the new keyword is used, a link between the object
// created and the prototype property of the constructor is established - this link can be accessed using __proto__

// The prototype object contains a property called constructor, which points back to the constructor function

// To share properties and methods for objects created by a constructor function,
// place them in the prototype as it is most efficient

// To pass methods and properties from one prototype object to another, we can use inheritance
// which involves setting the prototype property to be a newly created object using
// Object.create() and resetting the constructor property
