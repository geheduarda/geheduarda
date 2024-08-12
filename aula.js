function setup() {
  createCanvas(1000, 1000);
  background("#040F4D")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
