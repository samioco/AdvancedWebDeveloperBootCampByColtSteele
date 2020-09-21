// Data Joins & Update Patterns, Enter Selections in D3

// Objectives:
// join data to d3 selection using data method
// enter selection: target nodes to append to the DOM
// exit selection:  target nodes to remove from the DOM
// key function: more advanced data joins
// update existing DOM elements with new data
// merge update and enter selections
// describe D3's general update pattern

// Exit selections and key functions

// referencing data joins movie quotes app
quotes.pop()
d3.selectAll("li")
  .data(quotes)
  .exit()
  .remove()
// this will pop and remove the last quote item


// want to remove all quotes from R rated movies
var nonRQuotes = quotes.filter(movie => movie.rating !== "R");
// now bind to "li"s and remove extra elements
d3.selectAll("li")
  .data(nonRQuotes)
  .exit()
  .remove()

// this will move exit items to end of array list, and remove last two quote items
// undesirable because we don't want data manipulation

// re-style the elements after joining the new data
d3.selectAll("li")
  .text(d => `"${d.quote}" - ${d.movie} (${d.year})`)
  .style("margin", "20px")
  .style("padding", "20px")
  .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
  .style("background-color", d => colors[d.rating])
  .style("border-radius", "8px");


// key functions
selection.data(dataArr [, keyFunction])
// return value used to join elements and data
var nonRQuotes = quotes.filter(movie => movie.rating !== "R");
d3.selectAll("li")
  .data(nonRQuotes, d => d.quote)
  .exit()
  .remove();
  
