let yPos = 25;
let r, g, b


function setup() {
  createCanvas(500, 500);
  background(0);
  resetColor()
}

function draw() {
  background(0, 20);
  fill(r, g, b)
  ellipse(250, yPos, 50, 50);

  yPos += 3;

  if (yPos > 525) {
    yPos = -25;
  }
}

function mouseClicked() {
  resetColor()
  yPos = -25;

}

function resetColor() {
  r = random(0, 255)
  g = random(0, 255)
  b = random(0, 255)
}