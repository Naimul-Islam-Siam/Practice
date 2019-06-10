class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        return this.width * this.height;
    }

    details() {
        console.log(`I'm a rectangle of ${this.width} x ${this.height} dimension and I'm ${this.color}`);
    }
}

let rect1 = new Rectangle(3, 5, "blue");
rect1.details();