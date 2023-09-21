let canvas;
let centerX, centerY;
let staatLichesFont;
let img;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  staatLichesFont = loadFont('Staatliches-Regular.ttf');
  img = loadImage('softGradient-pastelPink.jpg');
}

function setup() {
  canvas= createCanvas(windowWidth, windowHeight, WEBGL);
  background(99, 111, 175);
  
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  
  canvas.position (0,0);
  canvas.style ('z index' , '-1');


  /*
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.textFont(staatLichesFont);
  extraCanvas.textSize(150);
  extraCanvas.strokeWeight(5);
  extraCanvas.stroke(255, 50);
  extraCanvas.noFill();
  extraCanvas.textAlign(CENTER);
  */
    
}

function draw() {

  //planeta
  noStroke();
  rotateY(millis() / 1600);
  sphere(215);
  
  texture(img);
  sphere(215);

   /*
  // Clear the extraCanvas and redraw the text
  extraCanvas.clear();
  extraCanvas.text("Bienvenidx", windowWidth / 2, windowHeight / 2);

  // Display the pre-rendered text canvas
  image(extraCanvas, 0, 0);
  */



}




