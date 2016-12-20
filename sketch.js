var myRenna, mic, volume;

function preload() {
  myRenna = loadImage('file/Renna.png');
  myTail = loadImage('file/Tail.png');
  myVillaggio = loadImage('file/Villaggio4.png')

}
var snowflakes = []

function setup() {
  createCanvas(360, 640);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  image(myVillaggio, 0, 0);
  fill(250);
  noStroke();
  volume = mic.getLevel();
  volume = map(volume, 0, 1, 0, 2)
  push();

  push();
  translate(width / 2, height / 2 - 100);
  imageMode(CENTER)
  image(myRenna, 0, 0, 180, 280);


  //TAIL
  push();
  translate(-57, 49);
  var tailRotation = map(volume, 0, 1, PI / 30, PI / 1);
  rotate(tailRotation);
  image(myTail, -10, -8.5);
  pop();

  //EYE 1
  fill(88, 54, 32);
  noStroke();
  var eyeX = 43;
  var eyeY = -8;
  var eyeSize = map(volume, 0, 1, 8, 20);
  ellipse(eyeX, eyeY, eyeSize, eyeSize);

  //EYE 2
  fill(88, 54, 32);
  noStroke();
  var eyeX = 33;
  var eyeY = -4;
  var eyeSize = map(volume, 0, 1, 6, 15);
  ellipse(eyeX, eyeY, eyeSize, eyeSize);

  //NOSE
  fill(250, 0, 0);
  noStroke();
  var noseX = 83;
  var noseY = 40;
  var noseSize = map(volume, 0, 1, 20, 60);
  ellipse(noseX, noseY, noseSize, noseSize);
  pop();
  pop();

  //SNOWFLAKES
  if (true) {
    var amount = map(volume, 0, 1, 0, 7);
    for (i = 1; i <= amount; i++) {
      var obj = {
        x: random(0, 1),
        y: random(0, -height / 10),
        size: random(1, amount + 2)
      }
      snowflakes.push(obj);
    }
  }

  for (var i = 0; i < snowflakes.length; i++) {
    var fallingSpeed = 1;


    snowflakes[i].y += fallingSpeed + snowflakes[i].y * 0.006;
    fill(235, 235, 188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x * width, snowflakes[i].y, snowflakes[i].size);
  }

  for (var i = snowflakes.length - 1; i >= 0; i--) {
    if (snowflakes[i].y > height) {
      snowflakes.splice(i, 1);
    }
  }

  //TEXT
  fill(200)
  textFont('Kaushan Script')
  textAlign(CENTER);
  textSize(20);
  text(' * MERRY CHRISTMAS * ',190,420);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}