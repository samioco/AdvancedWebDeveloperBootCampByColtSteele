// Async Functions HTTP Requests
// Sequential requests, not in parallel
// responseTwo does not begin until responseOne resolves

async function getMovieData(){
  var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
  console.log("Finished responseOne. Starting responseTwo!");
  var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
  console.log(responseOne);
  console.log(responseTwo);
}
getMovieData();
// Promise {<pending>}
// Finished responseOne. Starting responseTwo!
// {Title: "Titanic", Year: "1997", Rated: "PG-13", Released: "19 Dec 1997", Runtime: "194 min", …}
// {Title: "Shrek", Year: "2001", Rated: "PG", Released: "18 May 2001", Runtime: "90 min", …}

// Refactor to run in parallel
async function getMovieData(){
  var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
  var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
  var titanicData = await titanicPromise;
  var shrekData = await shrekPromise;
  console.log(titanicData);
  console.log(shrekData);
}
getMovieData();

// promise.all with await
async function getMovieData(first, second){
  var moviesList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ]);
  moviesList.forEach(movie => console.log(movie));
}
getMovieData('shrek', 'blade');
//Promise {<pending>}
// {Title: "Shrek", Year: "2001", Rated: "PG", Released: "18 May 2001", Runtime: "90 min", …}
// {Title: "Blade", Year: "1998", Rated: "R", Released: "21 Aug 1998", Runtime: "120 min", …}
