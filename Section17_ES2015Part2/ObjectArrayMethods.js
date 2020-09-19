// Object.assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

// ES5
var o = {name: "Sammy"};
var o2 = o;
o2.name = "Tim";
o.name; // "Time"

// ES2015
var o = {name: "Sammy"}
var o2 = Object.assign({}, o);
o2.name = "Tim";
o.name; // "Sammy"

// Not a deep clone
// ES2015
var o = {students: ["Sammy", "Reika"]};
var o2 = Object.assign({}, o);
o2.students.push("Jack");
o.students;
// objects inside of cloned object are still references!


// Array.from: convert other data types into arrays
// ES5
var divs = document.getElementsByTagName("div"); // returns an array-like object
divs.reduce // undefined: since divs is not a real array (array-like)
var converted = [].slice.call(divs); // convert array-like object into array
converted.reduce; // function reduce() {...}

// ES2015 using Array.from: convert array-like object into arrays
var divs = document.getElementsByTagName("div");
var arr = Array.from(divs);

var firstSet = new Set([1,2,3,4,3,2,1]); // {1,2,3,4}
var arrayFromSet = Array.from(firstSet); // [1,2,3,4]
