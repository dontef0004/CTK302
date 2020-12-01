let x = 0;
let x1 = 0;
let v = 7;
let v1 = 5;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect(x, 100, 50, 25);
  x = x + v;
  if (x > width) x = 0;

   //rect(x, 160, 50, 25);
   //x1 = x1 + -v1;
  // if (x1 > width) x1 = 0;


}
