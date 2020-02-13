const md = require("./utils/generateMarkdown.js");
const api = require("./utils/api")
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
        message: "What language(s) is your project written in?",
        name: "language"
    },
    {
        type: "input",
        message: "What are the installation instructions for you project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage of your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What licenses does your project have?",
        name: "license"
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
    },
    {
        type: "input",
        message: "What email can others reach you at?(entering nothing searches for github email)",
        name: "email"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
    .then(error => {
        if(error){
            return console.log(error);
        }
        console.log("Your readme has been made with the name createdREADME.md.");
    })
}

async function init() {
    try{
        const data = await inquirer
        .prompt(questions)
        
        const user = await api.api.getUser(data.username);

        writeToFile("createdREADME.md", md.generateMarkdown(data, user));

    }
    catch(error){
        console.log(error);
    }
}

init();