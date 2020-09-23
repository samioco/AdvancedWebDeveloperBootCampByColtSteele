// Text Element text attributes
// https://codepen.io/samioco/pen/KKzrEOd?editors=1010

svg {
  border: 1px solid black;
  width: 800px;
  height: 450px;
}

<svg
  version="1.1"
  baseProfile="full"
  xmlns="http://www.w3.org/2000/svg">
    <polygon
    fill="yellow"
    stroke="black"
    stroke-width="8px"
    points="400,21.5 450.5,177 614,177 481.5,273 532.5,428.5 400,332.5 267.5,428.5 318.5,273 186,177 349.5,177"
  />
  <circle cx="400" cy="250" r="60" fill="black" />
  <circle cx="400" cy="235" r="65" fill="yellow" />
  <circle cx="370" cy="210" r="10" fill="black" />
  <circle cx="430" cy="210" r="10" fill="black" />

  <text x="400" y="430">Smiley Star</text>
</svg>

// text-anchor
// transorm (rotate): rotate(degree x,y)

<svg
  version="1.1"
  baseProfile="full"
  xmlns="http://www.w3.org/2000/svg">
    <polygon
    fill="yellow"
    stroke="black"
    stroke-width="8px"
    points="400,21.5 450.5,177 614,177 481.5,273 532.5,428.5 400,332.5 267.5,428.5 318.5,273 186,177 349.5,177"
  />
  <circle cx="400" cy="250" r="60" fill="black" />
  <circle cx="400" cy="235" r="65" fill="yellow" />
  <circle cx="370" cy="210" r="10" fill="black" />
  <circle cx="430" cy="210" r="10" fill="black" />

  <text x="400" y="430"
        text-anchor="middle"
        font-size="1.5em"
        font-family="sans-serif"
        fill="white" stroke-width="1px" stroke="black"
        transform="rotate(-10 400,430)"
        >Smiley Star</text>
</svg>
