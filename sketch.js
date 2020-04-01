let cnv;

let boxes = [];

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('sketch');
    for (let i = 0; i < 200; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 70);
        boxes[i] = new Box(x, y, r);
    }
}

function draw() {
    //background(15, 76, 129);
    background(20);
    for(let box of boxes) {
        box.move();
        box.show();
    }

}

function windowResized() {
    cnv = resizeCanvas(windowWidth, windowHeight);
}

class Box {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        //giggle boxes in place
        this.x = this.x + random(-0.5, 0.5);
        console.log(this.x);
        this.y = this.y + random(-0.5, 0.5);
        console.log(this.y);
    }

    show() {
        stroke(190, 178, 213, 20);
        strokeWeight(4);
        noFill();
        rect(this.x, this.y, this.r);
    }
}