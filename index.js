const inquirer = require('inquirer');
const fs = require('fs');
let license = {
    link1: "",
    link2: "",
    summary: ""
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any tests for the project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a licencse for this project.',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the URL to your github profile page?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email address?'
    }
]).then((response) => {
    console.log("Answers", response)
    
    switch(response.license[0]){
        case "Apache 2.0":
        license.link1 = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
        license.link2 = "https://opensource.org/licenses/Apache-2.0"
        license.summary = "Apache License\nVersion 2.0, January 2004\nhttp://www.apache.org/licenses/"
        break;
        case "MIT":
            license.link1 = 'https://img.shields.io/badge/License-MIT-yellow.svg'
            license.link2 = 'https://opensource.org/licenses/MIT'
            license.summary = 'MIT License\nOpen Source Inititive\nhttps://opensource.org/licenses/MIT'
        break;
        case 'GNU GPL v3.0':
            license.link1 = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
            license.link2 = 'https://www.gnu.org/licenses/gpl-3.0'
            license.summary = 'GNU General Public License\nVersion 3.0, June 2007\nhttps://www.gnu.org/licenses/gpl-3.0'
        break;
    }

const readData =
`# ${response.title}
[![License](${license.link1})](${license.link2})
## Description 
${response.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Contact](#contact)

## Installation
${response.installation}
## Usage 
${response.usage}
## Contributors
${response.contributors}
## Tests
${response.tests}
## License
${license.summary}
## Contact
To view the code for this project visit the github profile below.
Github Profile:[${response.github}](${response.github})

For any questions contact us via email.
Email: [${response.email}](mailto:${response.email})
`;

fs.writeFile('readME.md', readData, function (err) {
 if (err) throw err;
 console.log("Created!")
})
});
