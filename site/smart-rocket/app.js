let vehicles = [], food = [], poison = [];

function setup() {

  createCanvas(640, 360);

  for (var i = 0; i < 10; i++) {
    let x = random(width), y = random(height);
    vehicles[i] = new Vehicle(x, y);
  }
  


  for (var i = 0; i < 40; i++) {
    let x = random(width), y = random(height);
    food.push(createVector(x, y));
  }
    
  

  for (var i = 0; i < 20; i++) {
    let x = random(width), y = random(height);
    poison.push(createVector(x, y));
  }
    
  
  // debug = createCheckbox();

}


function mouseDragged(){
  vehicles.push(new Vehicle(mouseX, mouseY));
}



function draw() {
  background(51);

  if (random(1) < 0.05) {
    let x = random(width), y = random(height);
    food.push(createVector(x, y));
  }

  if (random(1) < 0.01) {
    let x = random(width), y = random(height);
    poison.push(createVector(x, y));
  }
  
  for (var i = 0; i < food.length; i++) {
    fill(0,255,0);
    noStroke(); 
    ellipse(food[i].x, food[i].y, 4, 4);
  }

  for (var i = 0; i < poison.length; i++) {
    fill(255,0,0);
    noStroke(); 
    ellipse(poison[i].x, poison[i].y, 4, 4);
  }


  for (var i = vehicles.length - 1; i >= 0; i--) {

    let v = vehicles[i];
    v.boundaries();
    v.behaviors(food, poison);
    v.update();
    v.display();  


    let newVehicle = v.clone();
    if (newVehicle) vehicles.push(newVehicle);


    if (v.dead()) vehicles.splice(i, 1), food.push(createVector(v.position.x, v.position.y));

  }

  

}