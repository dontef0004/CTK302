let myCar1;
let myCar2;
let cars = [];

function setup() {
  createCanvas(500, 500);
  // for (let i = 0; i < 20 ; i++) {
  // cars.push(new Car());
  // }
  myCar1 = new Car();
  myCar2 = new Car();
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  noStroke();
}

function draw() {
  background('grey');
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++){
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
  // myCar1.display();
  // myCar2.display();
  // myCar1.move();
  // myCar2.move();
}


class Car {

  constructor() {
    // attributes
    this.pos = createVector(width/2, height-80);
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255 //random(255);
    this.g = 255 //random(255);
    this.b = 255 //random(255);
    this.a = random(200, 255);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
    // rect(this.pos.x, this.pos.y, 50, 25);
    // ellipse(this.pos.x-20, this.pos.y+10, 15);
    //ellipse(this.pos.x+20, this.pos.y+10, 15);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;

  }

}
