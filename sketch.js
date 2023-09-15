let r = 5;
let g = 60;
let b = 180;
let extraCanvas;
let centerX, centerY;
//let concertOneFont; // Changed the variable name to match the font variable name
let staatLichesFont;

function preload() {
  //concertOneFont = loadFont('ConcertOne-Regular.ttf');
  staatLichesFont = loadFont('Staatliches-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10); // Controla la velocidad de cambio de color
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.background(0, 0, 0, 0); 
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function draw() {
  background(255, 0);
  noStroke();
  r = (r + 10) % 256;
  g = (g + 10) % 256;
  b = (b + 10) % 256;
  
  // Cambia el color desde adentro hacia afuera
  for (let diam = windowHeight - 200; diam > 0; diam -= 2) {
    fill((r + diam) % 256, (g + diam) % 256, (b + diam) % 256, 20);
    ellipse(windowWidth / 2, windowHeight / 2, diam, diam);
  }

  // Aquí muestras el lienzo adicional con texto
  image(extraCanvas, 0, 0);

  //extraCanvas.textFont(concertOneFont); // Use the loaded font
  extraCanvas.textFont(staatLichesFont);
  extraCanvas.textSize(150);
  extraCanvas.strokeWeight(5);
  extraCanvas.stroke(255, 50);
  extraCanvas.noFill();
//  extraCanvas.fill(255);
  extraCanvas.textAlign(CENTER);
  extraCanvas.text("Bienvenidx", windowWidth / 2, windowHeight / 2);
}
