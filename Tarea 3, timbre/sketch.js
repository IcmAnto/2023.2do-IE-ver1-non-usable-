let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  Signature(mouseX, mouseY);
}

function draw() {
  background(0,0);
}
  
function Signature(){
  stroke(r, g, b);
  strokeWeight(5);

  r= random(0, 255)+random(50,100);
  g= random(0, 255)+random(10, 50);
  b= random(0, 255)+random(100,150);

  //A
  noFill();
  arc(mouseX, mouseY, 50, 50, PI, PI+HALF_PI);
  arc(mouseX, mouseY, 50, 50, PI+HALF_PI, 0);
  line(mouseX-25, mouseY, mouseX-25, mouseY+25);
  line(mouseX+25, mouseY, mouseX+25, mouseY+25);
  
  //I
  line(mouseX-25, mouseY, mouseX+25, mouseY);
  line(mouseX-25, mouseY+25, mouseX+25, mouseY+25);
  line(mouseX, mouseY, mouseX, mouseY+25);
  
  //C
  arc(mouseX, mouseY+3, 75, 75, QUARTER_PI, PI+HALF_PI+QUARTER_PI);
  
  //M
  line(mouseX-45, mouseY-45, mouseX-45, mouseY+40);
  line(mouseX+45, mouseY-45, mouseX+45, mouseY+40);
  line(mouseX-45, mouseY-45, mouseX, mouseY-35);
  line(mouseX+45, mouseY-45, mouseX, mouseY-35);
}