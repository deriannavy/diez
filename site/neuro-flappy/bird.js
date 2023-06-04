function Bird(brain) {

    this.spaceBetween = 125;
    this.y = height / 2;
    this.x = 25;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;

    this.score = 0;
    this.fitness = 0;
    if (brain) {
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(5, 8, 2);
    }


    this.dispose = function(){
      this.brain.dispose();
    }

    this.show = function(){
      stroke(255);
      fill(255, 100);
      ellipse(this.x, this.y, 16, 16);
    }

    this.up = function(){
        this.velocity += this.lift;
    } 

    this.mutate = function(){
      this.brain.mutate(0.1);
    } 

    this.think = function(pipes){

      let closest = null,
      closestD = Infinity;

      for (let i = 0; i < pipes.length; i++) {
        let d = (pipes[i].x + pipes[i].w) - this.x;
        if (d < closestD && d > 0) {
          closest = pipes[i];
          closestD = d;
        }
      }

      let
      inputs = [
                this.y / height, 
                closest.top / height,
                closest.bottom / height, 
                closest.x / width,
                this.velocity / 10
               ],
      output = this.brain.predict(inputs);
      // console.log(inputs);

      // console.log(output);
      // console.log(inputs);
      if (output[0] > output[1]) {
          this.up();
      }

    }

    this.offscreen = function(){
      return (this.y > height || this.y < 0);
    }


    this.update = function(){
      this.score++;
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;

      // if (this.y > height) {
      //     this.y = height;
      //     this.velocity = 0;
      // }

      // if (this.y < 0) {
      //   this.y = 0;
      //   this.velocity = 0;
      // }

    }

    
}