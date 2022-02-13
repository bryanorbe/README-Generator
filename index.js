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
])

// README file function
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			return console.log(err);
		}

	console.log("Successfully generated README");
	
	});

};

// TODO: Create a function to initialize app
function init () {
	inquirer.prompt(questions)
	.then(function (userInput) {
		console.log(userInput)
		writeToFile("README.md", generateMarkdown(userInput));
	});
};

// Function call to initialize app
init();
