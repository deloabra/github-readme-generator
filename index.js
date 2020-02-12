const md = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs").promises;

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description for your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for you project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can others test your project?",
        name: "tests"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data))
    .then(error => {
        if(error){
            return console.log(error);
        }
        console.log("Your readme has been made in the results folder.");
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(data => writeToFile("./results/README.md", data));
}

init();