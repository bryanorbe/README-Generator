const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Project Title.',
            name: 'appTitle', 
        }, {
			type: 'input',
			message: 'Enter Project Description.',
			name: 'appDesc', 
		}, {
            type: 'input',
            message: 'Enter Installation Instructions.',
            name: 'appInstall',
        }, {
            type: 'input',
            message: 'Enter Usage Instructions.',
            name: 'appUsage',
        }, {
            type: 'input',
            message: 'Enter Email Address.',
            name: 'devEmail',
        }, {
            type: 'input',
            message: 'Enter Github Username.',
            name: 'devGitHub',
        }, {
            type: 'list',
            message: 'Select License.',
            name: 'appLicense',
            choices: ['GNU AGPLv3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0',
                'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
    ])
    .then((data) => {
        if (data.appLicense === 'GNU AGPL v3') {
            data.appLicenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        } else if (data.appLicense === 'GNU GPL v3') {
            data.appLicenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (data.appLicense === 'GNU LGPL v3') {
            data.appLicenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        } else if (data.appLicense === 'Mozilla Public License 2.0') {
            data.appLicenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } else if (data.appLicense === 'Apache License 2.0') {
            data.appLicenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (data.appLicense === 'MIT License') {
            data.appLicenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (data.appLicense === 'Boost Software License 1.0') {
            data.appLicenseBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        } else {
            data.appLicenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        };
        writeToFile('sampleREADME.md', data);
    });