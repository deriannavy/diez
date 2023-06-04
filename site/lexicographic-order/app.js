var vals = [0, 1, 2, 3, 4, 5, 6];

function setup(){
    createCanvas(400, 300);
}


function draw(){

    

    console.log(vals);

    var largestI = -1;
    for (let i = 0; i < vals.length; i++){
        
        if (vals[i] < vals[i + 1]) largestI = i;    
    } 
    

    if (largestI == -1) {
        noLoop();
        console.log('finished');
    }

    var largestJ = -1;
    for (let j = 0; j < vals.length; j++) {
        
        if (vals[largestI] < vals[j]) largestJ = j;    
    }


    swap(vals, largestI, largestJ);



    let endArray = vals.splice(largestI + 1);
    endArray.reverse();
    vals = vals.concat(endArray);

    background(0);
    textSize(64);
    var s = vals.join('');

    fill(255);

    text(s, 20, height / 2)

}


function swap(a, i, j){
    var temp = a[i];
    a[i] = a[j],
    a[j] = temp;
}