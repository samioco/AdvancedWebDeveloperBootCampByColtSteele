// Path Elements

// d attribute comments
// M (move)
// L (line)
// Z (close path)
// Q (quadratic Bezier curve)
// C (cubic Bezier curve)
// A (circular arc)


// M Move command syntax: M X Y
// moves cursor to position (X,Y)
// does not draw anything, only moves

// L Line command syntaxA: L X Y
// draws line from cursor current position to (X, Y)
// Ends with cursor position at (X, Y)
// Can be chained to draw multiple lines

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <path d="M 400 100
           L 500 300
           L 300 300
           L 400 100"
        stroke="purple"
        stroke-width="3"
        />
</svg>

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <path d="m 400 100
           l 100 200
           l -200 0
           l 100 -200"
        stroke="purple"
        stroke-width="3"
        />
</svg>

// line command shortcuts
// H / h: draw horizontal line
// V / v: draw vertical line
// Z / z: close the path with a line

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <path d="m 400 100
           l 100 200
           h -200
           z"
        stroke="purple"
        stroke-width="3"
</svg>

// curve commands
// Q: quadratic curve
// C: cubic bezier curve
// A: circular arc

// quadratic curve
// Q cx cy, x y
// Q (control point), (destination point)

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke-width="10px">
    <path d="M 50 100 Q 400 0 800 225" stroke="red"/>
    <path d="M 100 100 Q 700 200 700 350" stroke="blue"/>

    <path d="M 0 200 C 200 450 400 0 800 225" stroke="orange"/>
    <path d="M 0 200 C 600 450 400 0 800 225" stroke="green"/>
  </g>
</svg>

// circular arc
// A rx ry rotate largeArc sweep x y
// rx/ry: radius (if equal: circle)
// x/y: destination

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">

  <path d="M300 250 A100 200 60 1 0 480 300" fill="red"/>
  <path d="M300 250 A100 100 0 1 1 480 300" fill="purple"/>
  <path d="M300 250 A100 100 0 0 0 480 300" fill="orange"/>
  <path d="M300 250 A100 100 0 0 1 480 300" fill="green"/>
<!--   <path d="M300 250 A100 100 1 1 1 480 300" fill="blue"/> -->

  <circle cx="300" cy="250" r="5"/>
  <circle cx="480" cy="300" r="5"/>
</svg>
