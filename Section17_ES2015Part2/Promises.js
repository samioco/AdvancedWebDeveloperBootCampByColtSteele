// Promise constructor
// A promise is a one time guarateed return of some future value
// when value is figured out - promise becomes resolved/fulfilled or rejected
// friendly way to refactor callback code
// libraries have implemented promises for a while. ES2015 brings it finally to JavaScript

// created using 'new' keyword
// every promise constructor accepts a callback function with two parameters, resolve and reject
// resolve/reject parameters are both functions to be potentially run depending on promise result

function displayAtRandomTime(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if (Math.random() > 0.5) {
        resolve('Yes!');
      } else {
        reject('No!');
      }
    }, 1000);
  });
}

displayAtRandomTime()
.then(function(value){
  console.log(value);
})
.catch(function(error){
  console.log(error);
});

// Returning promises
// promises always return something that has a .then (thenable)
// can chain promises together and return values from from one promise to the next

var years = [];
$.getJSON('https://omdbapi.com/?t=titanic&apikey=thewdb')
.then(function(movie){
  years.push(movie.Year);
  return $.getJSON('https://omdbapi.com/?t=shrek&apikey=thewdb');
})
.then(function(movie){
  years.push(movie.Year);
  console.log(years);
})
console.log('Starting!');
