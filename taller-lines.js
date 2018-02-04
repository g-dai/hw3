function draw() {
  
  for (var i = 0; i < 340; i += 5) {
    line(i, 0, i, i*2);
   }

}

background(255);
draw();
