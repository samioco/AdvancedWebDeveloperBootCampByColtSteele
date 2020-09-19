// ES2017 Async Functions
// simplify asynchronous code using promises
async function first(){
  return "Returning first";
}
first(); // Promise {<fulfilled>: "Returning first"}
first().then(val => console.log(val)); // "Returning first"

// keyword 'await': waits for promise to resolve, then resumes async function's execution
// like a pause button: allows more readable code (callback hell)
// similar to yield with generators

async function getMovieData(){
  console.log("Starting!");
  var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
  // code will pause until getJSON promise is resolved
  console.log(movieData);
  console.log("Done!");
}

getMovieData()
// Starting!
// Promise {<pending>}
// {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}
// Done!

// not necessary to use: .then, callback, or yield

// async functions in objects
var movieCollector = {
  data: "titanic",
  async getMovie(){
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}
movieCollector.getMovie();
// Promise {<pending>}
// {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}

// class async
class MovieData {
  constructor(name){
    this.name = name;
  }
  async getMovie(){
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}
var m = new MovieData('shrek');
m.getMovie();
// Promise {<pending>}
// {Title: "Undefined", Year: "2006", Rated: "Not Rated", Released: "21 Oct 2006", Runtime: "63 min", …}

// Handling errors: await rejections will throw errors
// use try/catch statements
async function getUser(user){
  try {
    var response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response);
  } catch(e) {
    console.log("User does not exit!");
    console.log(e);
  }
}

getUser("spongebob")
//Promise {<pending>}
// {login: "SpongeBob", id: 40156885, node_id: "MDQ6VXNlcjQwMTU2ODg1", avatar_url: "https://avatars3.githubusercontent.com/u/40156885?v=4", gravatar_id: "", …}


getUser("spongebobistheman")
// Promise {<pending>}
// entry-main-modern-vendor.355d87fecb50b4331433.js:1 GET https://api.github.com/users/spongebobistheman 404 (Not Found)
// send @ entry-main-modern-vendor.355d87fecb50b4331433.js:1
// ajax @ entry-main-modern-vendor.355d87fecb50b4331433.js:1
// m.each.m.<computed> @ entry-main-modern-vendor.355d87fecb50b4331433.js:1
// getJSON @ entry-main-modern-vendor.355d87fecb50b4331433.js:1
// getUser @ VM24943:3
// (anonymous) @ VM25039:1
// User does not exit!
// {readyState: 4, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}
