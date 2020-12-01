// This is a canvas that is 400x400 with a face that smiles and frowns
// depending on whether or not the mouse is pressed!
// It does not work! The person who wrote this code was
// texting and driving at the same time!
// Can you fix it?


function setup() {
  createCanvas(400, 400);
}

function draw() {

  text("smile",10,10) ;

  // the background color
  if (mouseIsPressed) {
     background('red');
  }else{
    background("blue");
  }


 // this ellipse should be 200x200 pixels in the center of the screen
  ellipse(width/2, height/2, 200, 200);

  // the mouth - smile if pressed, frown otherwise
  if (mouseIsPressed) {
    arc(200, 210, 130, 100, 0, PI); // smile - (this line is correct)
  } else {
    arc(200, 270, 130, 100, PI,0);
  }

  // the eyes
  ellipse(170, 180, 40, 40);
  ellipse(230, 180, 40, 40);




    if (mouseIsPressed) {
        print("for debugging")
        }

        text(mouseX + mouseY, 10, 10)  // print mouse locations to canvas



}
