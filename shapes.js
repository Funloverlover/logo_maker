class Circle {
    constructor() {
        this.color = "green";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square {
    constructor() {
        this.color = "green";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor() {
        this.color = "green";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };