const api = require("./utils/api.js");
const md = require("./utils/generateMarkdown.js");

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
        message: "What are the installation insctructions for you project?",
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
}

function init() {

}

init();