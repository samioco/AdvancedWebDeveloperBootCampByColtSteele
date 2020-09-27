// Extrema And Scales Using D3 and SVG
// Calculate extreme values in a data set
// scale data
// Build scatterplots, histograms, and pie charts
// add axes, gridlines, labels, and titles to graphs

// d3.max(dataArr [, callback]): returns max value in set
// d3.min(dataArr [, callback]): return min value in set

var people = [
  {name: "Brett", age: 40},
  {name: "Jack", age: 30},
  {name: "Jane", age: 20},
  {name: "Lee", age: 22}
];

d3.max(people, d => d.age); // 40
d3.min(people, d => d.name.length); // 3


// Scales
d3.scaleLinear()
  .domain([num1, num2])
  .range([num3, num4])

var scale = d3.scaleLinear()
  .domain([1,17])
  .scale([-4,52]);
scale(1); // -4
scale(17); // 52
scale(9); // 24
scale(5); // 10
scale(10.23); // 28.305
