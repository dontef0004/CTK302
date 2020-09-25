var f;
function setup() {
  createCanvas(800,800);

  f = loadFont("rr.ttf");
  //f = loadFont("p5/Unit 1/fonts/assets/Ranchers-Regular.ttf")
  textAlign(CENTER);
}

function draw() {
background(100);
textFont('f');
textSize(68);
text("Hello", width/2, height/2, 200, 200);
}
