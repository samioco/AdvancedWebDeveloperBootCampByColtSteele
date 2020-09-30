var width = 500;
var height = 500;
var padding = 20;

// var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
// var yMin = d3.min(birthData2011, d => d.lifeExpectancy);

var yScale = d3.scaleLinear()
  .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
  .range([height - padding, padding]);

var xScale = d3.scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births / d.population))
  .range([padding, width - padding]);

var colorScale = d3.scaleLinear()
  .domain(d3.extent(birthData2011, d => d.population / d.area))
  .range(['lightgreen', 'darkgreen']);

var radiusScale = d3.scaleLinear()
  .domain(d3.extent(birthData2011, d => d.population))
  .range([2,40]);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
    .attr("cx", d => xScale(d.births / d.population))
    .attr("cy", d => yScale(d.lifeExpectancy))
    .attr("r", d => radiusScale(d.population))
    .attr("fill", d => colorScale(d.population / d.area));
