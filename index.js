// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./src/generateReadMe');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter your name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a valid github username?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email to provide user with contact information?');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None']
        },
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
            name: 'url',
            message: 'Please enter url to the associated website.'
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
            type: 'checkbox',
            name: 'languages',
            message: 'What programming languages were used in this project? (Check all that apply!)',
            choices: ['HTML', 'CSS', 'Javascript', 'Java', 'Python']
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
            name: 'alt',
            message: 'Please enter alt text for image.'
        },
        {
            type: 'input',
            name: 'relative',
            message: 'Please enter the relative pathway for the image you would like to display!'
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

// TODO: Create a function to initialize app
function init() {
    questions().then(generateMarkdown).then(writeFile)
}

// Function call to initialize app
init();
