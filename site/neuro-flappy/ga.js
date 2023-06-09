function NextGeneration() {

    calculateFitness();

    for (let i = 0; i < TOTAL; i++) {
      birds[i] = pickOne();
    }

    //activar cuando use el modelo de tensor
    // for (let i = 0; i < TOTAL; i++) {
    //   saveBirds[i].dispose();
    // }

    console.log('Next Generation');
    saveBirds = [];
}

function pickOne(){
  var index = 0;
  var r = random(1);
  while(r > 0){
    r = r - saveBirds[index].fitness;
    index++;
  }
  index--;

  let bird = saveBirds[index],
  child = new Bird(bird.brain);
  child.mutate();
  return child;

}
// function pickOne(){
//   let bird = random(saveBirds),
//   child = new Bird(bird.brain);
  
//   child.mutate();

//   return child;
// }

function calculateFitness(){
    let sum = 0;
    for (let bird of saveBirds) {
      sum += bird.score;
    } 

    for (let bird of saveBirds) {
      bird.fitness = bird.score / sum;
    } 
}