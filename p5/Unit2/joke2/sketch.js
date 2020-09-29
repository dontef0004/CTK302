let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {

  switch (state){

    case 0:
    background('red');
    text('why did the chicken cross the road?', 250, 250);
    break;

    case 1:
    background('green')
    text('because it was having a bad day.', 250, 250);
    break;
  }

}
function mouseReleased() {
  state++;

  if(state > 2) state = 0;
}
