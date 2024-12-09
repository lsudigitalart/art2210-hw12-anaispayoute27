function setup() {
  water = loadImage("ocean.png")
 bird = loadImage("bird frfr.webp")
 dolfin = loadImage("dolfin.png")
 whale = loadImage("whale.webp")
 boat = loadImage("boat.png")
  createCanvas(400, 400);
}
let water;

function draw() {
  background(135, 206, 235);
  image(water, 0, 0, 400, 400);
  image(bird, mouseX, 0, 150, 150);
  image(whale, 0, 200, 200, 200);
  image(boat, 120, 150, 100, 100)
  image(dolfin, 200, 0, 200, 200);
}
