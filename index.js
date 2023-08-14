const fs = require("fs");
const inquirer = require('inquirer');
const shapes = require("./shapes.js");

inquirer.prompt([
    {
        type: 'input',
        name: 'string',
        message: 'Enter text'
    },
    {
        type: 'input',
        name: 'stringcolor',
        message: 'Select color for text: hex or string'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select shape: circle, square, or triangle',
        choices: [
            "Circle",
            "Square",
            "Triangle"
        ]
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Select color for shape: hex or string'
    }
]).then((responses) => {
    let { shapecolor, shape, string, stringcolor } = responses;
    let shapeClass = shapes[shape];
    let generatedShape = new shapeClass();
    generatedShape.setColor(shapecolor);
    let output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${generatedShape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${stringcolor}">${string}</text>
</svg>`;
    fs.writeFile(`./logo.svg`, output, (error) => {
        if (error !== null) {
            console.log(error);
            return;
        }
        console.log('Generated logo.svg');
    });
    return;
});