//THIS IS UNFINISHED

function draw() {
  
  stroke("white");
  
  for (var i  = 0; i < height; i += 5) {
    line(i, 0, i, 340)
   }
  
  fill("black");
  rect(20, 100, 130, 130);
  
  for (var x = 0; x < 130; x += 5) {
    line(20, x+100, 150, x+100)
   }
  
  ellipse(250, 170, 130, 130);
  
	/*for (var y = 0; y < 130; y += 5) {
  	line(185, y+105, 315, y+105);
  }*/
  
  for (var j = 0; j < 70; j += 5) {
    line(250-j, j+105, 250 + j, j+105)
  }
}

background("black");

draw();
