function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
	stroke(193,193,193);
	
	noFill();
  for (var i = 30; i < height*2; i += 30) {
    ellipse(height/2, width/2, i, i)
	}
	
	for (var j = 15; j < height*2; j += 15) {
		arc(200, j+10, width*1.5, height, PI, 0);
	}
	
	for (var j = 15; j < height*2; j += 15) {
		arc(200, j-255, width*1.5, height, 0, PI);
	}
	
	for (var x = 0; x < width; x += 15) {
		arc(x+20, height/2, 30, height, HALF_PI, PI*(3/2));
	}
	
		for (var x = 0; x < width; x += 15) {
		arc(x+20, height/2, 30, height, PI*(3/2), HALF_PI);
	}
}
