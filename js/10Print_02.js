let dimensione = 50;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(255);
}

function draw() {
  if ((x/ dimensione + y / dimensione) % 2 == 0)  { 
  fill (50, 234, 200);
   } else { 
  fill (200, 50, 234);
 } 
  square(x,y,dimensione);
  x += dimensione;
  if (x >= width) {
    x= 0;
    y += dimensione;
  }
 }

