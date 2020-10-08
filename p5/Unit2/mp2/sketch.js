let myState = 0;
var img1, img2, img3 ;
var mic;
var vol;


function preload(){
  img1 = loadImage("assets/tshirt.jpg");
  img2 = loadImage("assets/gheart1.jpg");
  img3 = loadImage("assets/noH8onTee.jpg");
}
function setup() {
  createCanvas(700, 700);

  image(img1, width/2, height/2);
  image(img2, width/2, height/2);
  image(img3, width/2, height/2);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch(myState) {
    case 0:
    background('purple');
    text('Click Button to Get a Design!', 250, 250);
    image(img1, width/2, height/2, 230, 200);
    break;

    case 1:
    background('orange');
    text('Here is your design. Say something to put it on a shirt!', 200, 235);
    text("My volume is " + vol, 10, 60);
    image(img2, width/2, height/2, 230, 200);
    if (vol > .010){
      state = 3;
    }
    break;

    case 2:
    background('blue');
    text('Ta Da!', 250, 250);
    image(img3, width/2, height/2, 230, 200);
  }

    fill('white');
    rect(10, 10, 50, 25);
}



function mouseReleased() {



  if (( mouseX > 10) && (mouseX < 60) && (mouseY > 10)  && (mouseY < 35));
  myState++;

  if (myState > 2) {
    myState = 0;
}
function touchStarted() {
  getAudioContext().resume();
}
}
