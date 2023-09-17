import MatrixNeuralNetwork from '@/classes/MatrixNeuralNetwork.js';
import ActivationFunctionNeuralNetwork from '@/classes/ActivationFunctionNeuralNetwork.js';


let sigmoid = new ActivationFunctionNeuralNetwork(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
);

let tanh = new ActivationFunctionNeuralNetwork(
  x => Math.tanh(x),
  y => 1 - (y * y)
);


export default class MultiperceptronNeuralNetwork {


	constructor(in_nodes, hid_nodes, out_nodes) {

		if (in_nodes instanceof NeuralNetwork) {
			let a = in_nodes;
			this.input_nodes = a.input_nodes;
			this.hidden_nodes = a.hidden_nodes;
			this.output_nodes = a.output_nodes;

			this.weights_ih = a.weights_ih.copy();
			this.weights_ho = a.weights_ho.copy();

			this.bias_h = a.bias_h.copy();
			this.bias_o = a.bias_o.copy();
		} 
		else {
			this.input_nodes = in_nodes;
			this.hidden_nodes = hid_nodes;
			this.output_nodes = out_nodes;

			this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
			this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
			this.weights_ih.randomize();
			this.weights_ho.randomize();

			this.bias_h = new Matrix(this.hidden_nodes, 1);
			this.bias_o = new Matrix(this.output_nodes, 1);
			this.bias_h.randomize();
			this.bias_o.randomize();
		}

		// TODO: copy these as well
		this.setLearningRate();
		this.setActivationFunction();

	}

	predict(input_array) {

		// Generating the Hidden Outputs
		let inputs = Matrix.fromArray(input_array);
		let hidden = Matrix.multiply(this.weights_ih, inputs);
		hidden.add(this.bias_h);
		// activation function!
		hidden.map(this.activation_function.func);

		// Generating the output's output!
		let output = Matrix.multiply(this.weights_ho, hidden);
		output.add(this.bias_o);
		output.map(this.activation_function.func);

		// Sending back to the caller!
		return output.toArray();
	}

}