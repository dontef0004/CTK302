function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {

background(0);


if (mouseIsPressed) {
  //shown when mouse is pressed

  background(220);
  background('#A9E2F3');


  //grass
  fill('#74DF00');
  rect( width/2, 305, 400, 200);


  //helmet
  fill("grey");
  arc(width/2, 115, 80, 80, 140, 400, PI, CHORD);

  fill("black");
  arc(width/2, 125, 45, 60, 140, 400, PI, CHORD);

  //facemask
  stroke('white');
  line(179, 135, 221, 135);

  line(178, 130, 222, 130);

  line(178, 125, 222, 125);

  line(210, 125, 210, 135);
  line(190, 125, 190, 135);

  //neck
  fill('black');
  noStroke()


  arc(width/2, 135, 30, 50, 5, 175, PI, CHORD);


  //torso
  fill('blue');
  rectMode(CENTER);
  rect(width/2, height/2, 70, 100);

  //number
  fill('white');

  rect(width/2, height/2, 10, 50);

  rect(width/2, 220, 30, 10);

  fill('white');
  quad(200, 180, 195, 175, 185, 190, 200, 190);



  //part of neck
  fill('black');
  arc(200, 138, 30, 50, 5, 175, PI, CHORD);


  //shoulder pads
  fill('blue')
  ellipse(160, 170, 40, 40);

  ellipse(240, 170, 40, 40);



  fill('grey');
  translate();
  rotate(45)
  ellipse (315,77, 30, 70);


  rotate(-75)
  ellipse(60, 360, 30, 70);



  rotate(55)
  ellipse(355, 148, 20, 60);

  rotate(0);
  ellipse(265, 235, 20,70);


  //football
  fill('brown')
  ellipse(240,110,30,60);

  //arm
  rotate(120)
  fill('black')
  ellipse(-12,-270,20, 70)

  rotate(120)
  ellipse(-200, 255, 20, 70)

  //hand
  ellipse(-190, 283, 30, 20)

  } else {
  background(220);

  stroke('black');

  background('red');






  //helmet
  fill("grey");
  arc(width/2, 115, 80, 80, 140, 400, PI, CHORD);

  fill("black");
  arc(width/2, 125, 45, 60, 140, 400, PI, CHORD);

  //facemask
  stroke('white');
  line(179, 135, 221, 135);

  line(178, 130, 222, 130);

  line(178, 125, 222, 125);

  line(210, 125, 210, 135);
  line(190, 125, 190, 135);

  //neck
  fill('black');
  noStroke()


  arc(width/2, 135, 30, 50, 5, 175, PI, CHORD);


  //torso
  fill('blue');
  rectMode(CENTER);
  rect(width/2, height/2, 70, 100);

  //number
  fill('white');

  rect(width/2, height/2, 10, 50);

  rect(width/2, 220, 30, 10);

  fill('white');
  quad(200, 180, 195, 175, 185, 190, 200, 190);



  //part of neck
  fill('black');
  arc(200, 138, 30, 50, 5, 175, PI, CHORD);


  //shoulder pads
  fill('blue')
  ellipse(160, 170, 40, 40);

  ellipse(240, 170, 40, 40);

  //biceps
  //rotate function
  translate(width/2, height/2);
   ellipseMode(CENTER);

  rotate(10);
  fill('black')
  ellipse(-50, 20, 30, 60);


  rotate(-20);
  ellipse(50, 20, 30, 60);



  //hands
  rotate(10);
  fill('black');
  ellipse(60, 45, 20, 20);
  ellipse(-60, 45, 20, 20);

//thighs

  ellipseMode(CENTER);
  rotate(0);
  fill('grey');
  arc(-20, 50, 30, 170, 0, 180, PI, CHORD);


   arc(20, 50, 30, 170, 0, 180, PI, CHORD);


//thigh pads
  stroke('black');
  ellipse(20, 70, 20, 30);
  ellipse(-20, 70, 20, 30);


  stroke('black');
  line(-25, 65, -15, 65)
  line(-25, 75, -15, 75)

  line(25, 65, 15, 65)
  line(25, 75, 15, 75)






//socks
  fill('white');

  arc(-20, 100, 25, 100, 0, 180, PI, CHORD);

  arc(20, 100, 25, 100, 0, 180, PI, CHORD);


}
   fill(0) ;
  textSize(30) ;
    text(mouseX + ", " + mouseY, 70, 170);

}
