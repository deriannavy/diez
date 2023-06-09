function Pipe(){

  var spacing = 125;
  var center = random(spacing, height - spacing);

  this.top =  center - spacing / 2;//random(height / 2);
  this.bottom = height - (center + spacing / 2) //random(height / 2);

  this.x = width;
  this.w = 40;
  this.speed = 2;

  this.highLight = false;


  this.show = function(){
    fill(255);

    if (this.highLight) fill(255, 0, 0);

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function(){
    this.x -= this.speed;
  }

  this.offScreen = function(){
    if (this.x < -this.w) {
      return true;
    }else{
      return false;
    }
  }

  this.hits = function(bird){
    if(bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highLight = true;
        return true;
      }
    } 
    this.highLight = false;
    return false;
  }
  // thisisinvisionappandimderiannavy
}