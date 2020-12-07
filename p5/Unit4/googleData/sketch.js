var bubbles = [];
var car;
var motorcycle;
var truck;


function setup() {

  car = loadImage("assets/car.png");
  motorcycle = loadImage("assets/motorcycle.png");
  truck = loadImage("assets/pickup.jpg");

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1POFmJFyN7sZkWLabBYrp0eCJuNdZspYmt7pR2OE3hVo'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Vehicle, data[i].Food)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myVehicle, myFood) {
    this.name = myName;
    this.vehicle = myVehicle;
    this.food = myFood;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 4);
  }


  display() {
    if (this.vehicle == "Car") {
      image(car, this.pos.x, this.pos.y, 50, 50);
    } else if (this.vehicle == "Motorcycle"){
      image(motorcycle, this.pos.x, this.pos.y, 50, 50);
    }else{
      image(truck, this.pos.x, this.pos.y, 50, 50)
  }
    // }
    ellipse(this.pos.x, this.pos.y, 50, 50);
    text(this.name, this.pos.x, this.pos.y);
    text(this.vehicle, this.pos.x, this.pos.y-16);
    text(this.food, this.pos.x, this.pos.y+16);
  }

  drive() {
    this.pos.x += this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }
}
