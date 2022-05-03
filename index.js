// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Welcome to my README generator anybody can use for their next project. \n This will create a file called GeneratedREADME.md. \n You can use <br> in your responses to include line breaks. \n \n Press enter/return to start!',
        name: 'welcome'
    },
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
            {name:'Apache 2.0', value:'apache'},
            {name:'GNU GPL v3.0', value:'gpl'},
            {name:'BSD 3', value:'bsd'},
            {name:'MIT', value:'mit'},
            {name:'Open Software License 3.0', value: 'opl'},
            {name:'None', value: 'none'}
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
    },
    {
        type: 'input',
        message: 'Got everything we need to create a README for your project! \n Click enter/return to generate it!',
        name: 'finish'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            data = generateMarkdown(data)
            fileName = 'GeneratedREADME.md'
            writeToFile(fileName, data);
        });
}

// Function call to initialize app
init();
