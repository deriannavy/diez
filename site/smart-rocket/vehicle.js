let mr = 0.1;


class Vehicle {
  constructor(x, y, dna) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.position = createVector(x, y);
    this.r = 4;
    this.maxspeed = 5;
    this.maxforce = 0.5;

    this.health = 1;


    this.dna = [];
    if (dna === undefined) {

      this.dna[0] = random(-5, 5);
      this.dna[1] = random(-5, 5);
      this.dna[2] = random(0, 100);
      this.dna[3] = random(0, 100);
    } else {

    
      this.dna[0] = dna[0];
      if (random(1) < mr) this.dna[0] += random(-0.1, 0.1)
      this.dna[1] = dna[1];
      if (random(1) < mr) this.dna[1] += random(-0.1, 0.1)
      this.dna[2] = dna[2];
      if (random(1) < mr) this.dna[2] += random(-10, 10)
      this.dna[3] = dna[3];
      if (random(1) < mr) this.dna[3] += random(-10, 10)
    }

    
  }


  update() {

    this.health -= 0.01;

    this.velocity.add(this.acceleration);

    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }



  applyForce(force) {
    this.acceleration.add(force);
  }



  behaviors(good, bad){

    let steersG = this.eat(good, 0.2, this.dna[2]);
    let steersB = this.eat(bad, -0.5, this.dna[3]);

    steersG.mult(this.dna[0]);
    steersB.mult(this.dna[1]);

    this.applyForce(steersG);
    this.applyForce(steersB);
  }





  clone(){
    if (random(1) < 0.001) {
      return new Vehicle(this.position.x, this.position.y, this.dna)  
    } else {
      return null;
    }
    
  }





  eat(list, nutrition, perception){
    var record = Infinity, closest = null;

    for (var i = list.length - 1; i >= 0; i--) {
      
      var d = this.position.dist(list[i]);

      if (d < this.maxspeed) list.splice(i, 1), this.health += nutrition;
      else { if (d < record && d < perception) record = d, closest = list[i]; }

    }

    
    if(closest != null) return this.seek(closest);


    return createVector(0,0)
  }




  seek(target) {

    var desired = p5.Vector.sub(target, this.position); 

    desired.setMag(this.maxspeed);


    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); 

    return steer;
  }



  dead(){
    return (this.health < 0);
  }



  display() {
    
    var angle = this.velocity.heading() + PI / 2;
    
    push();
    translate(this.position.x, this.position.y);
    rotate(angle);


    if (true) {
      strokeWeight(3);
      stroke(0, 255, 0);
      noFill();
      line(0,0, 0, -this.dna[0]*20);
      ellipse(0,0, -this.dna[2]*2)

      strokeWeight(2);
      stroke(255, 0, 0);
      line(0,0, 0, -this.dna[1]*20);
      ellipse(0,0, -this.dna[3]*2)  
    }

    

    var gr = color(0,255,0), rd = color(255,0,0),
    col = lerpColor(rd, gr, this.health);

    fill(col);
    stroke(col);
    strokeWeight(1);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);


    


    pop();
  }



  boundaries() {

    let desired = null, d = 25;

    if (this.position.x < d) {
      desired = createVector(this.maxspeed, this.velocity.y);
    } else if (this.position.x > width - d) {
      desired = createVector(-this.maxspeed, this.velocity.y);
    }

    if (this.position.y < d) {
      desired = createVector(this.velocity.x, this.maxspeed);
    } else if (this.position.y > height - d) {
      desired = createVector(this.velocity.x, -this.maxspeed);
    }

    if (desired !== null) {
      desired.normalize();
      desired.mult(this.maxspeed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }




}