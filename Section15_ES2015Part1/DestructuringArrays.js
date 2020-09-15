// Destructuring Arrays

// ES5
var arr = [1,2,3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
a; // 1
b; // 2
c; // 3

// Destructured...
var arr2 = [4,5,6];
var [d,e,f] = arr;
d; // 4
e; // 5
f; // 6

function returnNumbers(a,b){
  return [a,b];
}
// ES5
var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];

// Destructured...
[first, second] = returnNumbers(5,10);

first; // 5
second; // 10


// Swapping values
// ES5
function swap(a,b){
  var temp = a;
  a = b;
  b = temp;
  return [a,b];
}
swap(10,5); // [5,10]

// ES2015 Swapping array values
function swap(a,b){
  return [a,b] = [b,a];
}
swap(10,5); // [5,10]
