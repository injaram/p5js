var img;

function preload() {
  img = loadImage('images/3-01.png');
}

function setup() {
  createCanvas(472, 472);
  background(200);
  textSize(32);
  text('mouseDragged_imgDrawing', 0, 25);
  image(img, 10, 10,50,50);
}

function mousePressed() {
  image(img, mouseX, mouseY, 50,50);
}

function mouseDragged() {
  image(img, mouseX, mouseY, 50,50)
}

function draw() {
  print(mouseIsPressed);
}
