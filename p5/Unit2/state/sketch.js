let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {


    case 0:
      background('red');
      text("case 0", 250, 250);
      break;


    case 1:
      background('green');
      text("case 1", 250, 250);
      break;


    case 2:
      background('blue');
      text("case 2", 250, 250);
      break;

    }
}

function mouseReleased() {
  state++ ;
  if (state > 3){
    state = 0;
  }
}
