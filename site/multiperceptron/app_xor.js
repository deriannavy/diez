let nn,
lr_slider,
training_data = [
  {
    inputs:[0,0],
    output:[0]
  },
  {
    inputs:[1,0],
    output:[1]
  },
  {
    inputs:[0,1],
    output:[1]
  },
  {
    inputs:[1,1],
    output:[0]
  }
]

function setup() {
  createCanvas(400, 400);  

  nn = new NeuralNetwork(2,4,1);
  lr_slider = createSlider(0.01,0.5, 0.1, 0.01)

}


function draw() {
    background(0);

    for (let i = 0; i < 1000; i++) {
      
      data = random(training_data);
      nn.train(data.inputs, data.output);

    }

    
    nn.setLearningRate(lr_slider.value());
  
    let resolution = 10,
    cols = width / resolution,
    rows = height / resolution;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {

        let x1 = i / cols,
        x2 = j / rows,
        inputs = [x1, x2],
        y = nn.predict(inputs);
        noStroke();
        fill(y * 255);
        rect(i * resolution, j * resolution, resolution, resolution)
      }
    }
}