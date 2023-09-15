let extraCanvas;
let centerX, centerY;
let staatLichesFont;
let img;

function preload() {
  staatLichesFont = loadFont('Staatliches-Regular.ttf');
  img = loadImage('softGradient-pastelPink.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.textFont(staatLichesFont);
  extraCanvas.textSize(150);
  extraCanvas.strokeWeight(5);
  extraCanvas.stroke(255, 50);
  extraCanvas.noFill();
  extraCanvas.textAlign(CENTER);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function draw() {
  noStroke();
  background(99, 111, 175);
  rotateY(millis() / 15000);
  sphere(150);
  
  texture(img);
  sphere(150);

  // Clear the extraCanvas and redraw the text
  extraCanvas.clear();
  extraCanvas.text("Bienvenidx", windowWidth / 2, windowHeight / 2);

  // Display the pre-rendered text canvas
  image(extraCanvas, 0, 0);
}


