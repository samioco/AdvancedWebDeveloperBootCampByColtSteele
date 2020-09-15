// ES5 Destructuring
// Extracting values from data stored in objects and arrays

var person = {
  firstName: "Sammy",
  lastName: "So"
}
var firstName = instructor.firstName;
var lastName = instructor.lastName;
firstName; // "Sammy"
lastName; // "So"

// Object destructuring (if variables/keys are same name)
var {firstName, lastName} = person;
firstName; // "Sammy"
lastName; // "So"

// Different variable names
var {firstName: first, lastName: last} = person;
first; // "Sammy"
last; // "So"


// ES5 Default Values with an object
function createPerson(options){
  var options = options || {}
  var name = options.name || {first: "John", last: "Doe"};
  var isFunny = options.isFunny || false;
  return [name.first, name.last, isFunny];
}
createPerson(); // ["John", "Doe", false]
createPerson({isFunny:true}); // ["John", "Doe", true]
createPerson({name: {first:"ELon", last:"Musk"}}); // ["ELon", "Musk", false]
createPerson({name: {first:"ELon", last:"Musk"}, isFunny: true}); // ["ELon", "Musk", true]



// ES2015 Destructuring
// Pass in default parameter as destructured object
// Assign default value to empty object {} (so ES2015 will recognize dustructuring)
function createPerson({name={first:"Jane",last:"Smith"}, isLost=false} = {}){
  return [name.first, name.last, isLost];
}
createPerson(); // ["Jane", "Smith", false]
createPerson({isFunny:true}); // ["John", "Doe", true]
createPerson({name: {first:"ELon", last:"Musk"}}); // ["ELon", "Musk", false]
createPerson({name: {first:"ELon", last:"Musk"}, isFunny: true}); // ["ELon", "Musk", true]


// ES5 Object fields as parameters
function displayInfo(obj){
  return [obj.name, obj.favColor];
}
var person = {
  name: "Sammy",
  favColor: "So"
};
displayInfo(person); // ["Sammy", "So"]

// ES2015: can declare destructured function if parameters are same name as object keys
function displayInfo({name, favColor}){
  return [name, favColor];
}
displayInfo(person); // ["Sammy", "So"]

// Very commonly used in React
