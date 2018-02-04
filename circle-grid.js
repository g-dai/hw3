function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background('black');
	
	for (var i = 20; i < width-15 ; i += 20) {
		for (var j = 20; j < height-15; j += 20) {
		fill('white')
		ellipse(i, j, 15, 15);
		}
	}
}
