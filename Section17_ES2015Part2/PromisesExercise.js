// ES2015 Promises Assignment
//
// 1. Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a promise, which when resolved, returns a string which displays the username who has the most followers.
//
// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.


function getMostFollowers(...usernames){
  let api = "https://api.github.com/users/";
  let urls = usernames.map(user => $.getJSON(api + user));
  return Promise.all(urls).then(function(data){
    let mostFollowers = data.sort((a,b) => a.followers < b.followers)[0];
    return `${mostFollowers.name} has the most followers with ${mostFollowers.followers}`;
  });
}

getMostFollowers('elie','tigarcia','colt').then(function(data){
  console.log(data);
})

// "Colt has the most followers with 424"

// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.
// "Luke Skywalker"

starWarsString(id){
  let api = "https://swapi.co/";
  return $.getJSON(`api${id}`)
  .then(function(data){
      console.log(data.name);
  });
}
//

// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
starWarsString(id){
  var result = "";
  let api = "https://swapi.co/";
  return $.getJSON(`api${id}`)
  .then(function(data){
      result = `${data.name}`;
      return $.getJSON(data.films[0]);
  })
  .then(function(film){
    result += ` in ${film.title}, directed by ${film.director}`;
    console.log(result);
  })
}



// Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. Your function should return a promise that when resolved will console.log the name of the character and the film they are featured in and the name of the planet.

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
starWarsString(id){
  var result = "";
  let api = "https://swapi.co/";
  return $.getJSON(`api${id}`)
  .then(function(data){
      result = `${data.name}`;
      return $.getJSON(data.films[0]);
  })
  .then(function(film){
    result += ` in ${film.title}`;
    console.log(result);
    return $.getJSON(film.planets[0]);
  })
  .then(function(planet){
    result += `, and it takes place on ${planet.name}`;
  });
}
