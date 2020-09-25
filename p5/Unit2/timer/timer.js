timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {


    case 0:
      background('red');
      timer ++;
        if (timer >100){
          state = 1;

        }


      //pseudocode
      //make the timer count uo 1 each loop
      //if the time is greater than 100, go to state 1

      break;


    case 1:
      background('green');
      text("case 1", 250, 250);
      break;


    }
}

function mouseReleased() {
  state++ ;
  if (state > 3){
    state = 0;
  }
}
