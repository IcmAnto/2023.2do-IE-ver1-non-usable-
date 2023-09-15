
function setup() {
  createCanvas(windowWidth, 500);
    background(70, 130, 100, 180);  

}

function draw() {
  strokeWeight(8);
    noFill();
  noLoop();
  //createSlider();

//TRONCO
  line(windowWidth/3, 500, windowWidth/3, 250);

//RAMAS ARBOL
  arc(windowWidth/3, 340, 150, 50, HALF_PI, PI);
  arc(windowWidth/3, 325, 150, 50, 0, HALF_PI);
  arc(windowWidth/3, 275, 50, 50, HALF_PI, PI);
  arc(windowWidth/3, 255, 50, 50, 0, HALF_PI);
  arc(windowWidth/3, 275, 100, 80, 0, PI);
  
//HOJA
  strokeWeight(5);
  stroke(0, 100);
  ellipse(3*windowWidth/4, windowHeight/2, 180, 300);

}

function Leaves(x, y, w, h, start, stop){
  push();
  translate(x, y);
  strokeWeight(3);
  stroke(30, 255, 100, 200);
  fill(150, 240, 0, 60);
  
  
  ellipse(0,0,random(2, 25),random(2,25)*2, 0, 0);
  
  if(windowWidth/3+60<x<windowWidth/3-60, 350< y <200){
      ellipse(0,0,random(2, 25),random(2,25)*2, 0, 0);
  }
  
  pop()
}

function leaveVein(x, y, ang, mag){
  
}