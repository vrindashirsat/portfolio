function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("lightblue")
  rect(100,(400-frameCount%400),100,50,2,4,6,8);
}