const { Circle, Square, Triangle } = require('./shapes.js');

describe("Classes test", () => {
    test("Circle", () => {
        let shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
    test("Square", () => {
        let shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="10" width="200" height="200" fill="blue" />');
    })
    test("Triangle", () => {
        let shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})