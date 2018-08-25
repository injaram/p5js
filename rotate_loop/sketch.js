var angle = 0;
var btn_loop, btn_noloop;

function setup() {
  createCanvas(400, 300);
  angleMode(DEGREES);
  createP('');
  btn_loop = createButton("loop");
  btn_noloop = createButton("noloop");
  
  btn_loop.mousePressed(loop);
  btn_noloop.mousePressed(noLoop);
}

function draw() {
  background(200);
  push();
  translate(100, 100);
  rotate(angle);
  fill(random(255), random(255), random(255));
  rect(0, 0, 100 , 50)
  pop();
  
  translate(200,200);
  rotate(-angle*3)
  fill(0, 255, 0);
  rect(0,0,50, 50);

  angle = angle + 5;
}