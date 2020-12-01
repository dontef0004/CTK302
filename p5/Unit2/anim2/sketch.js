let x = 0;
let x1 = 0;
let v = 10;
let v1 = 5;
var img;
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  img = loadImage("assets/football.png");
}

function draw() {
  background(220);


  image(img, x, 100, 50, 25);

  x = x + v;
  if (x > width) x = 0;

   //rect(x, 160, 50, 25);
   //x1 = x1 + -v1;
  // if (x1 > width) x1 = 0;


}
