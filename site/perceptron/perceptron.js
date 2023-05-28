class Perceptron{
    constructor(){
        this.weights = new Array(2);
        this.lr = 0.1;
        

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1,1);
        }
    }
    

    guess(inputs){
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        
        return this.activate(sum);
    }

    activate(sum) {
        if (sum >= 0) return 1;
        else return -1;
    }

    train(inputs, target){
        let guess = this.guess(inputs);
        let error = target - guess;

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr;
        }   

    }
}