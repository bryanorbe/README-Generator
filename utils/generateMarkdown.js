// function to generate markdown for README
function generateMarkdown(data) {

	return `# ${data.appTitle}
  
	${data.appLicenseBadge}
  
	## Table of Contents
	* [Description](#description)
	* [Installation](#installation)
	* [Usage](#usage)
	* [Tests](#tests)
	* [Technologies-Used](#technologies-used)
	* [Questions](#questions)
	* [Contributions](#contributions)
	* [License](#license)
  
	## Description
	${data.appDesc}
  
	## Installation
	${data.appInstall}
  
	## Usage
	${data.appUsage}
  
	## Contact
	  
	If you have any questions you can reach me at ${data.devEmail} or via my GitHub [${data.devGitHub}](https://github.com/${data.devGitHub}).
  
	## Contributions
	For any contributionns you can reach me at ${data.devEmail} or via my GitHub [${data.devGitHub}](https://github.com/${data.devGitHub}).
  
	## License
	Licensed under ${data.appLicense} license.
  `;
  };
  
  module.exports = generateMarkdown;