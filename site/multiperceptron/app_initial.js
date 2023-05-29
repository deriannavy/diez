var brain;
let training_data = [
	{
		inputs:[0,0],
		targets:[0]
	},
	{
		inputs:[0,1],
		targets:[1]
	},
	{
		inputs:[1,0],
		targets:[1]
	},
	{
		inputs:[1,1],
		targets:[0]
	}
]

function setup(){
	createCanvas(400, 400);
	brain = new NeuralNetwork(2,2,1);

	// let inputs = [1,0];
	// let target = [1];

	// let output = brain.feedForward(input);
	// console.log(outputs);
	
	// brain.train(inputs, target)
	for (let i = 0; i < 60000; i++) {
		
		let data = random(training_data);
		
			brain.train(data.inputs, data.targets);
				
	}	

	console.log(brain.predict([0,0]))
	console.log(brain.predict([0,1]))
	console.log(brain.predict([1,0]))
	console.log(brain.predict([1,1]))

	

}


function draw(){

	
}