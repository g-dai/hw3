function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(211, 120, 120);
  } else if (key == 'G') {
    fill(120, 211, 120);
  } else if (key == 'B') {
    fill(120, 155, 211); 
  } else if (key == 'Y') {
		fill(255, 244, 183);
	} else if (key == 'P') {
		fill(209, 190, 229);
	} else if (key == 'O') {
		fill(247, 211, 165);
	} else if (key == '1') {
		diameter = 10;
	} else if (key == '2') {
		diameter = 20;
	} else if (key == '3') {
		diameter = 30;
	}
}
