
function gracePatch(x, y) {
  colorMode(RGB);
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  
  // your code here!
  colorMode(HSB);
  //stroke(random(255), 50, 100);
  stroke("black");
  
  line(x,y+50,x+100,y+50);
  count = 0
  var height = 100
  while (count < 10) {
    arc(x+50, y+50, 100, height, PI, 0);
    height -= 10
    count += 1
  }
  ellipse(x+50, y+70, 15, 15);
}

background(255);

gracePatch(0, 0);
gracePatch(width-100, height-100);
