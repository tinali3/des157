// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  createCanvas(800, 250);
  background(255);
}

function draw() {
  if(mouseIsPressed) {
    fill(0);
  }else{
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}
