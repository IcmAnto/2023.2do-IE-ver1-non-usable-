let myFont;
function setup() {
  createCanvas(400, 400);
  myFont=loadFont('Magic Retro.ttf');
}

function draw() {
  background(22, 0);
  textFont(myFont);
  textSize(100)
  text("Hola", 100, 200);
}