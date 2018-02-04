function draw() {
  
  for (var i = 1; i < 170; i += 10) {
    line(170 - i, i, 170 + i, i)
   }
  
  for (var x = 1; x < 170; x += 10) {
    line(x, 170 + x, 340 - x, 170 + x)
   }

}

background(255);
draw();
