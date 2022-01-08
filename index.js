// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your repository.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of this repository.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('All readme files should at a minimum contain a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any specific installation instructions you would like to tell the user about?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Would you like to list any usage information?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Would you like to state any specific contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Would you like to list any specific testing instructions?'
        }
    ])
};

questions()
    .then(generateMarkdown);   
// TODO: Create a function to write README file
function writeToFile(fileName, questionData) {
    console.log(questionData);
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
