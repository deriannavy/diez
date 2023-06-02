const TOTAL = 250;
var 
birds = [], 
pipes = [],
saveBirds = [],
counter = 0,
slider;

function keyPressed(){
  if(key == 's'){
    let bird = birds[0];
    saveJson(bird.brain, 'bird.json');
    // let json = bird.brain.serialize();
  }
}


function setup(){
  createCanvas(400, 550);

  tf.setBackend('cpu');

  slider = createSlider(1, 100, 1);

  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();  
    
  }

  
  bird = new Bird();
  // pipes.push(new Pipe);

}


function draw() {

    for (let n = 0; n < slider.value(); n++) {
      
      if (counter % 75 == 0) {
        pipes.push(new Pipe);
      }
      counter++;
      
  
  
      for (let i = pipes.length - 1; i >= 0; i--) {
        let pipe = pipes[i];
        pipe.show();
        pipe.update();
  
        for (let j = birds.length - 1; j >= 0; j--) {
        
          if (pipes[i].hits(birds[j])) { 
            saveBirds.push(birds.splice(j, 1)[0]);
            
          }
        }
        
        if (pipe.offScreen()) {pipes.splice(i, 1)}
      }
      
      for (let i = birds.length - 1; i >= 0; i--) {

        if (birds[i].offscreen()) { 
          saveBirds.push(birds.splice(i, 1)[0]);
          
        }
      }
  
  
      for (let bird of birds) {
        
        bird.think(pipes);
        bird.update();
        
      }
  
      if (birds.length == 0) { 
        counter = 0;
        NextGeneration();
        pipes = [];
      }
      
    }

    


    background(0);

    for (let bird of birds) {
      bird.show();
    }

    for (let pipe of pipes) {
      pipe.show();
    }

    
    

    
}



// function mousePressed() {
  
// }

// function keyPressed() {
//   if (key == ' ') {
//       bird.up();
//   }
// }