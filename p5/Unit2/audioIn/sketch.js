var mic;
var vol;
var y = 0 ;
var c = 'green' ;
let x = 0;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
  c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color


  rect(x, 10, 10, 10);

  x = x + 1;
  }
  rect(x, 10, 10, 10);
  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
