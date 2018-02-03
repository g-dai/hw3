function draw() {
  
  noFill();
  for (var i = 10; i < height; i += 10) {
    ellipse(170, 170, i, i)
   }
  
}

background(255);
draw();
