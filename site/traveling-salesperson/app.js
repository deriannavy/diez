var cities = [], totalCities = 10, recordDistance, bestEver;

function setup(){

    createCanvas(400, 300);


    for (let i = 0; i < totalCities; i++) {
        
        var v = createVector(random(width), random(height));

        cities[i] = v;
        
    }

    var d = calcDistance(cities);
    recordDistance = d;
    bestEver = cities.slice();

}


function draw(){

    background(0);
    fill(255);


    for (let i = 0; i < cities.length; i++) {
        
        ellipse(cities[i].x, cities[i].y, 6, 6);
        
    }



    stroke(255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < cities.length; i++) {
        vertex(cities[i].x, cities[i].y);
    }
    endShape();


    stroke(255, 255, 9);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < bestEver.length; i++) {
        vertex(bestEver[i].x, bestEver[i].y);
    }
    endShape();


    var i = floor(random(cities.length)),
    j = floor(random(cities.length));

    swap(cities, i, j);

    var d = calcDistance(cities);

    if (d < recordDistance) {
        recordDistance = d;
        bestEver = cities.slice();
        console.log(recordDistance);
    }







}

function swap(a, i, j){
    var temp = a[i];
    a[i] = a[j],
    a[j] = temp;
}

function calcDistance(points){

    var sum = 0;

    for (let i = 0; i < points.length - 1; i++) {
        var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
        
        sum += d;        
    }

    return sum;

}