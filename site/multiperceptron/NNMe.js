function sigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}
function dsigmoid(y) {
	return sigmoid(y) * (1 - sigmoid(y));
	// return y * (1 - y);
}

class NeuralNetwork{

	constructor(inputs_nodes, hidden_nodes, output_nodes){
		this.inputs_nodes = inputs_nodes;
		this.hidden_nodes = hidden_nodes;
		this.output_nodes = output_nodes;

		this.weights_ih = new Matrix(this.hidden_nodes, this.inputs_nodes);
		this.weights_ih.randomize();

		this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
		this.weights_ho.randomize();

		this.bias_h = new Matrix(this.hidden_nodes, 1);
		this.bias_o = new Matrix(this.output_nodes, 1);
		this.bias_h.randomize();
		this.bias_o.randomize();
		
		this.learning_rate = 0.1;
	}


	feedForward(input_array){
		let inputs = Matrix.fromArray(input_array);
		let hidden = Matrix.multiply(this.weights_ih, inputs);
		
		hidden.add(this.bias_h);
		hidden.map(sigmoid);
				

		let outputs = Matrix.multiply(this.weights_ho, hidden);
		outputs.add(this.bias_o);
		outputs.map(sigmoid);

		
		
		return outputs.toArray();
	}	
	

	train(input_array, targets_array){

		let inputs = Matrix.fromArray(input_array);
		let hidden = Matrix.multiply(this.weights_ih, inputs);

		hidden.add(this.bias_h);
		hidden.map(sigmoid);

		

		let outputs = Matrix.multiply(this.weights_ho, hidden);
		outputs.add(this.bias_o);
		outputs.map(sigmoid);

		
		
		let targets = Matrix.fromArray(targets_array);


		let output_errors = Matrix.subtract(targets, outputs);
		// let gradient = outputs * (1 - outputs);
		let gradients = Matrix.map(outputs, dsigmoid);
		outputs.multiply(output_errors);
		outputs.multiply(this.learning_rate);

		

		let hidden_T =  Matrix.transpose(hidden);
		let weight_ho_deltas = Matrix.multiply(gradients, hidden_T);


		this.weights_ho.add(weight_ho_deltas);
		this.bias_o.add(gradients);

		let who_t = Matrix.transpose(this.weights_ho);
		let hidden_errors = Matrix.multiply(who_t, output_errors);

		let hidden_gradient = Matrix.map(hidden, dsigmoid);
		hidden_gradient.multiply(hidden_errors);
		hidden_gradient.multiply(this.learning_rate);

		// console.log(this.feedForward(input_array));

		let inputs_T = Matrix.transpose(inputs);
		let weight_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T);
		

		this.weights_ih.add(weight_ih_deltas);
		this.bias_h.add(hidden_gradient);

		
		// weights Hidden layer Ouputs
		



		// outputs.print()
		// targets.print()
		// error.print();
	}
	
}



   