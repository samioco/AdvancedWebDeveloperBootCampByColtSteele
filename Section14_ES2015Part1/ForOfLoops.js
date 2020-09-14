// for in loop: loop over keys in an object
// for in loop: loop over indexes in an array

var arr = [1,2,3,4,5];
for (let val of arr){
  console.log(val);
}
// 1
// 2
// 3
// 4
// 5

// for of loop: loop over values in an array
// symbol iterator

for(k of {}){}
// VM545:1 Uncaught TypeError: {} is not iterable
for(k in {}){}
// undefined
var obj = {
    name: "Sammy",
    age: 39,
    race: "human"
}

obj // {name: "Sammy", age: 39, race: "human"}
for (let k in obj){console.log(k)}
// name
// age
// race
for (let k of obj){console.log(k)}
// VM503:1 Uncaught TypeError: obj is

// for of cannot access an index
// can only be used on data structures of a Symbol.iterator method implemented (no objects)
