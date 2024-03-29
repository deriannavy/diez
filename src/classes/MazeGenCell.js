import p5 from 'p5';

export default class MazeGenCell {

	constructor(p5Canva, i, j, size, cols, rows){
		this.i = i;
    	this.j = j;
    	this.cols = cols;
    	this.rows = rows;
    	this.walls = [true, true, true, true];
    	this.visited = false;
    	this.size = size;
    	this.p5Canva = p5Canva;
	}

	index(i, j) {

	   if (i < 0 || j < 0 || i > this.cols - 1 || j > this.rows - 1) return -1;
	   return i + j * this.cols;
	}

	checkNeighbors(grid) {
        var neighbors = [],
		      top = grid[this.index(this.i    , this.j - 1)],
				right = grid[this.index(this.i + 1, this.j    )],
		      bottom = grid[this.index(this.i    , this.j + 1)],
		      left = grid[this.index(this.i - 1, this.j    )];

        if (top && !top.visited) neighbors.push(top);

        if (right && !right.visited) neighbors.push(right);

        if (bottom && !bottom.visited) neighbors.push(bottom);

        if (left && !left.visited) neighbors.push(left);

        if (neighbors.length > 0) {

            var r = Math.floor(Math.random() * neighbors.length + 0);
            return neighbors[r];

        }
        else { return undefined; }

    }

    highlight() {
        var x = this.i * this.size  + 100, y = this.j * this.size + 50;

        this.p5Canva.noStroke(255);
        this.p5Canva.fill(255, 255, 255, 100);
        this.p5Canva.rect(x, y, this.size, this.size);
    }

    show() {
        var x = this.i * this.size  + 100, y = this.j * this.size + 50;
        
        this.p5Canva.stroke(255);

        if(this.walls[0]) this.p5Canva.line(x     ,y     ,x + this.size ,y    );

        if(this.walls[1]) this.p5Canva.line(x + this.size ,y     ,x + this.size ,y + this.size);

        if(this.walls[2]) this.p5Canva.line(x + this.size ,y + this.size ,x     ,y + this.size);

        if(this.walls[3]) this.p5Canva.line(x     ,y + this.size ,x     ,y    );

        if (this.visited) {
            this.p5Canva.noStroke();
            this.p5Canva.fill(200, 200, 200, 100);
            this.p5Canva.rect(x, y, this.size, this.size);
        }
    }

}