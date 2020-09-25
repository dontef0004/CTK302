function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke()

  //sky
  background('#A9E2F3');

  //grass
  fill('#74DF00');
  rect( 0, 250, 400, 150);

  //house base
  fill('#B40404');
  rect( 50, 200, 100, 100);


  //roof
  fill('#61380B');
  triangle( 20, 200, 100, 100, 180, 200);


  //clouds
  fill("white");
  ellipse(140, 60, 60, 60);
  ellipse(220, 60, 60, 60);
  ellipse(180, 60, 60, 60);
  ellipse(160, 30, 60, 60);
  ellipse(200, 30, 60, 60);


//sun
fill('yellow');
ellipse(400, 30, 130, 130);


//windows
fill('grey')
rect(110,210,30,30)
rect(60,210,30,30)








//door
fill('#8A4B08');
rect(85,250,30,50);

//doorknob
fill('grey');
ellipse(110,270,5,5);

}
