let points = new Array(100);
let ptron;

function setup() {
    createCanvas(500, 500);
    ptron =  new Perceptron();
    let inputs = [-1, 0.5];
    let guess = ptron.guess(inputs);
    console.log(guess);

    for (let i = 0; i < points.length; i++) {
        points[i] = new Point();
    }


    
}

function draw() {
    background(255);
    stroke(0);
    line(0,0, width, height);
    for (let point of points) {point.show();}

    for (let point of points) {
        let inputs = [point.x, point.x];
        let target = point.label;
        // ptron.train(inputs, target);

        let guess = ptron.guess(inputs);

        if (guess == target) {fill(0,255,0);}
        else {fill(255,0,0);}

        noStroke();
        ellipse(point.x, point.y, 4,4);
    }

    
}

function mousePressed(){
    console.log('pressed');
    for (let point of points) {
        let inputs = [point.x, point.x];
        let target = point.label;
        ptron.train(inputs, target);
    }
}