// Objectives
// select elements in the DOM using d3.select and d3.selectAll
// get and set attribute and property values (inner text, style) on D3 selections
// chain D3 methods together to make complex changes to DOM
// pass callback functions into D3 selection methods for more dynamic behavior
// add event listeners using 'on' method
// d3.event to access event object inside of an event listener
// add/remove DOM elements with D3

// to use D3: load at bottom of HTML using <script>
<script src="https://d3js.org/d3.v4.js"></script>

// d3 accepts CSS selector
d3.select("#page-title")
d3.selectAll("li")
selection.nodes() // return an array of matching HTML elements
selection.node() // first element of array

// to change an element
d3.select("#page-title")
.style("background-color", "red");
// Selection {_groups: Array(1), _parents: Array(1)}
// style method returns a D3 selection
d3.select("#page-title")
.style("background-color", "red")
.style("color", "blue")
.attr("class", "new-class")
.text("D3 is cool");
// Selection {_groups: Array(1), _parents: Array(1)}

// manipulating selections
// style, attr, text, html methods
selection.style(property [, newValue])
selection.attr(attribute [, newValue])
selection.text([newValue]) // inner text
selection.html([newValue]) // inner html

// if newValue not passed in, D3 methods will perform a get

// selection.classed(classList [, shouldClassesBeSet]) // shouldClassesBeSet: boolean to enable or remove

// Selections and Callbacks
// callback invoked once for each element in selection
d3.selectAll("li")
.style("font-size", function() {
  return Math.random() * 40 + "px";
});
// Selection {_groups: Array(1), _parents: Array(1)}

// callback structure
function(_, idx) {
  // code
}
// value and indexs of current element in selection
d3.selectAll("li")
.style("background-color", function(_, idx) {
  return idx % 2 === 0 ? "lightgrey" : "white";
});

d3.select(".outer")
    .style("color", "purple")
  .select("div")
    .style("font-size", "30px")
    .style("background-color", "orange")
  .select("div")
    .style("border", "8px solid blue");
