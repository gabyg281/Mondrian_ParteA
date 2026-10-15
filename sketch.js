function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 20, 250);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
