
var three;
function setup() {
    three = new Three();
    

    for (let i = 0; i < 10; i++) {
        
        var randomNumber = Math.floor(Math.random() * 201);

        three.addValue(randomNumber);
        
    }

    three.traverse();

    
    return three;
}





console.log(setup());
