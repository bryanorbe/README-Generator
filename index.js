const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log("README GENERATOR V 1.00")

const questions = [
	{
			type: 'input',
			message: "Enter Project Title",
			name: 'Title',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "Enter Description",
			name: 'Description',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "How to Install",
			name: 'Installation',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "How to Use",
			name: 'Usage',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "Who worked on this project?",
			name: 'Credits',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "Enter your Email address",
			name: 'email',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
    {
			type: 'input',
			message: "Enter your GitHub info",
			name: 'Git',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'input',
			message: "How to Contribute",
			name: 'Usage',
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Use N/A to signify none');
                    return false;
                }
            }
	},
	{
			type: 'checkbox',
			name: 'license',
			message: "Choose a license.",
			choices: ['Apache', 'GNU', 'MIT', 'MPL 2.0', 'N/A'],
			validate: user_input => {
                if (user_input) {
                    return true;
                } else {
                    console.log('Select an Option');
                    return false;
                }
            }
	},
]

// README write file function
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			return console.log(err);
		}

	console.log("Successfully generated README");
	
	});

};

// initialize app function
function init () {
	inquirer.prompt(questions)
	.then(function (userInput) {
		console.log(userInput)
		writeToFile("README.md", generateMarkdown(userInput));
	});
};

// call initialize app

init();
