
var img;

function preload() {
  img = loadImage('images/3-01.png');
}

function setup() {
  createCanvas(472, 472);
  background(200);
  image(img, 0, 0,50,50);
}

function mousePressed() {
  push();
  image(img, mouseX, mouseY, 50,50);
  pop()
}

function mouseDragged() {
  // background(200);
  image(img, mouseX, mouseY, 50,50)  
}

function draw() {
  // image(img, mouseX-img.width/2, mouseY-img.height/2, 50,50);
  print(mouseIsPressed);
}