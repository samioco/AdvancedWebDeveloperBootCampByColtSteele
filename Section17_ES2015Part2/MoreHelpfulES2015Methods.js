// find: invoked on arrays
// accepts: callback(value, index, array), just like forEach, map, filter, etc
// Returns value found or undefined if not found

var students = [
  {name: "Sammy"},
  {name: "Matt"},
  {name: "Jack"},
  {name: "Reika"}
]
students.find(function(val){
  return val.name === "Jack";
}); // {name: "Jack"}


// findIndex: returns index or -1 if not found, of return boolean statement
var students = [
  {name: "Sammy"},
  {name: "Matt"},
  {name: "Jack"},
  {name: "Reika"}
]
students.findIndex(function(val){
  return val.name === "Jack";
}); // 2


// includes: returns a boolean if value is in a string (easier than indexOf)
// ES5
"awesome".indexOf("some"); // 3
"awesome".indexOf("some") > -1; // true
// ES2015
"awesome".includes("some"); // true


// Number.isFinite
// ES5
function seeIfNumber(val){
  if(typeof val === "number" && !isNaN(val)){
    return "It is a number";
  }
}
// ES2015
function seeIfNumber(val){
  if(Number.isFinite(val)){
    return "It is a number";
  }
}

Number.isInteger(2); // true
Number.isInteger(2.1); // false

// Recap
// ES2015 map data structure is useful for creating key value pairs when keys are not just strings
// ES2015 sets are useful for creating unique data sets and do not require key value pairs
// ES2015 Promise constructor allows array of promise handling with Promise.all
// generators: functions/methods that can pause/resume
