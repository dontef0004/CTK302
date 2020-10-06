var x=0;
var mic;
var vol;
function setup() {
  createCanvas(300, 300);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
background("purple");
fill("orange");
rect(x,height/2,10,20);
vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

//toFixed limits the decimal places

// check how loud the input is
if (vol > .45) { // if the volume is LOUD?

x+=10;
}
if(x>width) x=0;

// extra stuff for debugging
textSize(18);
text("scream to move the rectangle! " + vol, 10, 60);


}

function touchStarted() {
  getAudioContext().resume();
}
