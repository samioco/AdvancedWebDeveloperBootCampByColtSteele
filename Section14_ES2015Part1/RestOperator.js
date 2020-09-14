function printArguments(a,b,...c){
  console.log(a);
  console.log(b);
  console.log(c);
}
printArguments(1,2,3,4,5);
// 1
// 2
// [3,4,5]

// rest operator c
// always returns an array


// ES5
function sumArguments(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

// convert arguments array-like object using slice and call
// fancier ES5

function sumArguments(){
  var argumentsArray = [].slice.call(arguments);
  var total = 0;
  for (var i=0; i<argumentsArray.length; i++){
    total += argumentsArray[i];
  }
  return total;
}

// using reduce
function sumArguments(){
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
  });
}
