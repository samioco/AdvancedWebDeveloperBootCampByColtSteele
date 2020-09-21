// Event listeners in D3
// add event listener
// selection.on(eventType, callback)
d3.select("h1").on("click", function(){
  console.log("You just clicked on the h1 tag!");
});
// only one event listener can be running at a time
// to deactivate:
d3.select("h1").on("click", null);

// selection.append(tagName): append new element of type tagName to every element in selection
// returns a new d3 selection

// event object
// d3.event
// prevent default form behavior

d3.select("#new-note").on("submit", function() {
  d3.event.preventDefault();
  var input = d3.select("input");
  d3.select("#notes")
    .append("p")
      .classed("note", true)
      .text(input.property("value"));
});

// Removing Elements
// selection.remove()
