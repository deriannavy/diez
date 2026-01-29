var fruits = [
    {name:'mango', score: 5},
    {name:'blueberry', score: 3},
    {name:'cherry', score: 1},
    {name:'melón', score: 7},
    {name:'apple', score: 1}
]


function setup(){

    createCanvas(400, 300);

    background(0);

    let sum = fruits.reduce((ac, e) => ac + e.score, 0);

    for (let i = 0; i < fruits.length; i++) {
        fruits[i].prob = fruits[i].score / sum;    
    }

    

}


function pickOne(list){
    var index = 0;
    var r = random(1);

    while (r > 0) {
        r = r - list[index].prob;
        index++;
    }

    index--;

    return list[index];



}