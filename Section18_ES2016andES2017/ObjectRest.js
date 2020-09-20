// object 'rest': gather rest/remaining keys/values from an object to create a new object
var person = {
  first: "sammy",
  last: "so",
  job: "coder",
  familySize: 4
}

var { first, last, ...data} = person
first; // "sammy"
last; // "so"
data; // {job: "coder", familySize: 4}

// object 'spread': spread out keys/values from an object to a new object
var person = {first: "sammy", last: "so", job: "coder"}
var person2 = {...person, first: "john", last: "doe"}

// similar to ES2015 Object.assign()
// useful for making copies with default values
// common in React and Redux

var defaults = {job: "none", ownsCat: true, ownsDog: true};
var john = {...defaults, ownsCat: false};
var jane = {...defaults, ownsDog: false};
