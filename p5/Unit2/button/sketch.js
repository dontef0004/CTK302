let myState = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(myState) {
    case 0:
    background('purple');
    text('case 0', 250, 250);
    break;

    case 1:
    background('orange');
    text('case 1', 250, 250);
    break;
  }
    fill('white');
    rect(10, 10, 50, 25);
}



function mouseReleased() {



  if (( mouseX > 100) && (mouseX < 300) && (mouseY > 100)  && (mouseY < 200));
  myState++;

  if (myState > 1) {
    myState = 0;
}
}
