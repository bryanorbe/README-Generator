const inquirer = require('inuirer');
const fs = require('fs');

inquirer.prompt([
	{
			type: 'input',
			message= "Enter Project Title",
			name: 'Title',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "Enter Description",
			name: 'Description',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "How to Install",
			name: 'Installation',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "How to Use",
			name: 'Usage',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "Who worked on this project?",
			name: 'Credits',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "Enter your Email address",
			name: 'email',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
    {
			type: 'input',
			message= "Enter your GitHub info",
			name: 'Git',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'input',
			message= "How to Contribute",
			name: 'Usage',
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	},
	{
			type: 'checkbox',
			name: 'license',
			message: "Choose a license.",
			choices: ['Apache', 'GNU', 'MIT', 'MPL 2.0', 'N/A'],
			validate: (value) => { if(value){return true} else {return "Cannot be blank"}}
	}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
