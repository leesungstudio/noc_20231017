
let balls = [];
let i = 0;
let sound, amplitude;

function preload() {
  sound = loadSound("Catch_a_Rabbit.mp3");
}

function setup() {
  createCanvas(1280, 720, WEBGL);
  amplitude = new p5.Amplitude();
}

function draw() {
  orbitControl();
  background(0);
  push();
 
 
  noFill();
  stroke(120, 100, 240);
  strokeWeight(4);
  box(2000, 2120, 2000);
  pop();

  for (let b of balls) {
    b.update();
    b.display();

    // b.passEdges();
    b.bounceEdges();

    let level = amplitude.getLevel();

    b.reactMusic(level);

  }

  if (mouseIsPressed) {
    balls.push(new Walker(i));
    i += 0.1;
  }
}


function keyPressed() {
  if (keyCode == 32) {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.loop();
      amplitude = new p5.Amplitude();
      amplitude.setInput(sound);
    }
  }
}