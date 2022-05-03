// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please type a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does a user need to do to run this project/app?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What does a user need to know when using this project/app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can a user contribute to this project/repo?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How can a user run tests on the project/repo?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Select which Licnese you would like to append to this project.',
        name: 'license',
        choices: [
            'Apache 2.0',
            'GNU GPL v3.0',
            'BSD 3',
            'MIT',
            'Open Software License 3.0',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            username2 = generateMarkdown(data)
            console.log(username2)
        });

    // console.log("init works")
    // generateMarkdown()
}

// Function call to initialize app
init();
