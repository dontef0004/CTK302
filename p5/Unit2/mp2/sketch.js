let state = 0;
var img1, img2, img3 ;
var mic;
var vol;
let timer = 0;


function preload(){
  img1 = loadImage("assets/tshirt.jpg");
  img2 = loadImage("assets/gheart1.jpg");
  img3 = loadImage("assets/noH8onTee.jpg");
  mic = new p5.AudioIn();
  mic.start();
  vol = (mic.getLevel()).toFixed(2);
}
function setup() {
  createCanvas(700, 700);



  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch(state) {

    case 0:
    background('purple');
    text('Wait to Get a Design!', 250, 250);
    image(img1, width/2, height/2, 230, 200);
    timer ++;
      if (timer >100){
        state = 1;
      }
    break;

    case 1:
    background('orange');
    text('Here is your design. Say something to put it on a shirt!', 200, 235);
    text("My volume is " + vol, 10, 60);
    image(img2, width/2, height/2, 230, 200);
    mic = new p5.AudioIn();
    mic.start();
    vol = (mic.getLevel()).toFixed(2);
    if (vol > 0.10){
      state = 2;
    }
    break;

    case 2:
    background('blue');
    text('Ta Da!', 250, 250);
    image(img3, width/2, height/2, 230, 200);
    break;

}




  function mouseReleased() {
    state++ ;

    }
  }
