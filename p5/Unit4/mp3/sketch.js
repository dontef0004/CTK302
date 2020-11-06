var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird;
var birds = [];
var gok ;
var myFont ;
var sad ;
var win ;
let song ;

function preload(){
  song = loadSound('assets/whistle.mp3');

}

function setup() {

  createCanvas(800, 800);

  birds[0] = loadImage("assets/football.png");
  birds[1] = loadImage("assets/football.png");
  birds[2] = loadImage("assets/football.png");
  yodaRight = loadImage("assets/helmetRight.png");
  yodaLeft = loadImage("assets/helmetLeft.png");
  yoda = yodaRight;

  bird = loadImage("assets/football.png");

    back = loadImage('assets/gridiron.jpg');
    lose = loadImage('assets/nogood.jpg');
    win = loadImage('assets/touchdown.png');
    myFont = loadFont('assets/Zone Brown.ttf');



  //spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());

  }


  //initial frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {




    case 0:
    background('#66FFFF');
     fill('black');
     textFont(myFont);  // SETS the font
     textSize(50);
      text("GO LONG!, \n Click to Play", 200, 250);
      song.play();


      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        myState = 2;
      }
        song.play();
      break;

    case 2:
      //background(200);
      image(lose, 400, 400, 400, 400);
      textFont(myFont);  // SETS the font
      textSize(50);
      text("NO GOOD", 300, 200);
      song.play();
      break;

    case 3:
      //background(200);
      image(win, width/2, height/2);
      textFont(myFont);  // SETS the font
      textSize(100);
      text("TOUCHDOWN !", 300, 200);
        song.play();
      break;


  }


}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  car = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

// car class
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length-1)) ;
  this.timer = 0;
  this.maxTimer = random(10, 60);


  this.display = function() {
    fill(this.r, this.g, this.b);

    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0 ;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  //background(100);
  image(back, 400, 400, 800, 800);


  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

      song.play() ;

    }
  }

  if (cars.length == 0) {
    timer = 0
    myState = 3;
  }



  image(yoda, frogPos.x, frogPos.y, 100, 100);
  //ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys();

}
