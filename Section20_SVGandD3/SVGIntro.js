// SVG Objectives (Scalable Vector Graphics)
// raster & vector graphics
// SVG elements in the DOM
// SVG draw lines
// Create groups of SVG elements
// draw shapes
// write text
// draw general paths
// use D3 to build SVG bar chart


// Raster images use pixels (gif, jpg, png)
// Vector images use lines / curves

// SVG Element
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg"></svg>

// normally graph coords go up/right positively
// (0,0) is lower left

// svg coords move down/right positively
// (0,0) is upper left


// lines
svg {
  border: 1px solid black;
  width: 800px;
  height: 450px;
}
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="100" x2="700" y2="350" stroke-width="5px" stroke="blue"/>
  <line x1="100" y1="350" x2="700" y2="100" stroke-width="5px" stroke="blue"/>
</svg>

// g Elements (group): combine elements for sharing attributes/functionality
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <g stroke-width="5px" stroke="blue">
    <line x1="100" y1="100" x2="700" y2="350"/>
    <line x1="100" y1="350" x2="700" y2="100"/>
  </g>
</svg>


// shapes
// rectangle Elements
// rect attributes
// (x, y) of upper left corner
// width, height
// stroke, stroke-width for color, border thickness
// fill: interior color
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="300" height="200"
        fill="#ffc107" stroke="#2196f3" stroke="8px"/>
  <rect x="100" y="200" width="300" height="400"
        fill="#e91e63" stroke="#795548" stroke="8px"/>
</svg>

// rx - x direction round corner
// ry - y direction round corner

// polygon: shape whose edges connected by straight lines (no rounded corners)
// points: space-separated list of points representing vertices of polygon
// points: x1,y1   x2,y2

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,50 350,50 350,250 50,250"
        fill="#ffc107" stroke="#2196f3" stroke="8px"/>
  <polygon points="100,200 400,200 400,500 100,500"
        fill="#e91e63" stroke="#795548" stroke="8px"/>
</svg>


// circle
// cx,cy: x,y coord of center
// r: radius of circle
