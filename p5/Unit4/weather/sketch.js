// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var humidity = 0;
var name = "";
var f;

function setup() {
  createCanvas(400, 400);

f = loadFont('assets/Zone Brown.ttf');


  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=60901,us&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=e279d169d244838f24908466514e0028'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      textFont(f);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("humidity is" + humidity, 20, 60);
      text("temperature is" + temperature, 20, 80);

      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x+50, 350, 170, 70);


      // move the cloud's x position
      x = x + windspeed/3;
      if (x > width) x = 0;

      break;

  }
}
