let timer = 0;
let state = 0;


function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state){
    case 0:
    background('purple');
    text('Why did the chicken cross the busy road?', 250, 250);
    break;

    case 1:
    background('orange');
    text('because he was having a bad day. ', 250, 250);
    break;

    timer = timer + 1;
    if (timer > 5*60) {

      state = 1;
      timer = 0;
    }
  }

}


function mouseReleased() {
  state++;

  if (state > 1) {
    state = 0;
  }
}
