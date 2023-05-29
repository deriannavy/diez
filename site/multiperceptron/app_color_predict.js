
let 
r,g,b,
brain,
which = 'Dark'



function pickColor() {
  r = random(255),
  g = random(255),
  b = random(255);
  redraw();
}

function colorPredictor(r, b, g){
  
  let 
  inputs = [r / 255, b / 255, g / 255],
  outputs = brain.predict(inputs);

  
  
  if (outputs[0] > outputs[1]) {
    return 'Dark';
  } else {
    return 'White';
  }

  
}

function trainColor(r, g, b) {
  if(r + b + g > 300){
    return [1,0];
  } else {
    return [0,1];
  }
}

function setup() {
  createCanvas(600, 300);
  noLoop();
  
  brain = new NeuralNetwork(3, 3, 2);

  for (let i = 0; i < 10000; i++) {
    let 
    r = random(255),
    g = random(255),
    b = random(255),
    targets = trainColor(r, g, b),
    inputs = [r / 255, b / 255, g / 255];
  
    brain.train(inputs, targets);

    
    
  }
  
  pickColor();



}

function mousePressed() {
  // let 
  // targets,
  // inputs = [r, g, b];



  // if (mouseX > width / 2){
  //   targets = [1,0];
  // } else {
  //   targets = [0,1];
  // }

  
  // brain.train(inputs, targets);
  
  pickColor();
}




function draw() {
 background(r,g,b);
 strokeWeight(2);
 stroke(255);
 line(width / 2, 0, width / 2, height );

 textSize(50);
 noStroke();
 fill(0);
 textAlign(CENTER, CENTER);
 textFont('bold');
 text('Back', 150, 150);
 fill(255);
 textFont('bold');
 text('White', 450, 150);

 let which = colorPredictor(r,g,b);
 console.log(trainColor(r, g, b));

 if (which == 'Dark'){
   fill(0);
   ellipse(150, 200, 20, 20);
 } else {
   fill(255);
   ellipse(450, 200, 20, 20);
 }
}