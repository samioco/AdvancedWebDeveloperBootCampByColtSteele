// Coding Exercise - Async Functions Assignment
// Async Functions Assignment
// 1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers.

// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

async function hasMostFollowers(){
  let base = "https://api.github.com/users/";
  let urls = Array.from(arguments).map(user => $.getJSON(base + user));
  let userData = await Promise.all(urls);
  // console.log(userData);
  let user = userData.sort((a,b) => a.followers < b.followers)[0];
  // console.log(user);
  return `${user.name} has the most followers with ${user.followers}`;
}

hasMostFollowers('sammy','tigarcia','colt').then(function(data){
    console.log(data);
});

async function getFollowers(user){
  let base = "https://api.github.com/users/";
  let url = base + user;
  let data = await $.getJSON(url);
  console.log(data.followers);
}

// "Colt has the most followers with 424"

// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should
// return a promise that when resolved will console.log the name of the character.

function starWarsString(id){
  let url = `https://swapi.co/people/${id}`;
  var str = "";
  return $.getJSON(url)
  .then(data => {
    str += `${data.name}`;
    return str;
  });
}

starWarsString(1).then(function(data){
    console.log(data)
})

// "Luke Skywalker"


// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

function starWarsString(id){
  let url = `https://swapi.co/people/${id}`;
  var str = "";
  return $.getJSON(url)
  .then(data => {
    str += `${data.name}`;
    return str;
  })
  .then(data => {
    str += ` is featured in ${data.title}, directed by ${data.director}`;
    return str;
  });
}

starWarsString(1).then(function(data){
    console.log(data)
})
//
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"

// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.

function starWarsString(id){
  let url = `https://swapi.co/people/${id}`;
  var str = "";
  return $.getJSON(url)
  .then(data => {
    str += `${data.name}`;
    return str;
  })
  .then(data => {
    str += ` is featured in ${data.title}, directed by ${data.director}`;
    return $.getJSON(data.planets[0]);
  })
  .then(planet => {
    str += ` and it takes place on ${planet.name}`;
    return str;
  });
}

starWarsString(1).then(function(data){
    console.log(data)
})

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"

// refactor to async

async function starWarsString(id){
  let str = "";
  let url = `https://swapi.co/api/people/${id}`;
  let data = await $.getJSON(url);
  str += `${data.name}`;
  let data = await $.getJSON(data.films[0]);
  str += ` is featured in ${data.title}, directed by ${data.director}`;
  let data = await $.getJSON(data.planets[0]);
  str += ` and it takes place on ${data.name}`;
  return str;
}

starWarsString(1).then(function(data){
    console.log(data)
})
