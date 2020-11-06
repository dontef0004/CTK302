let myCar1;
let myCar2;

function setup() {
  createCanvas(500, 500);
  myCar1 = new Car();
  myCar2 = new Car();
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  background('white');
  myCar1.display();
  myCar2.display();
  myCar1.move();
  myCar2.move();
}


class Car {

  constructor() {
    // attributes
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.w = random(40, 70);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.w, 25);
    ellipse(this.pos.x-20, this.pos.y+10, 15);
    ellipse(this.pos.x+20, this.pos.y+10, 15);
  }

  move() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
