const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const questions = inquirer.prompt([
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
    const readData =
    `# ${response.title}
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
    ${response.license}
    ## Contact
    
    Github Profile:[${response.github}](${response.github})
    Email: [${response.email}](mailto:${response.email})
`;

fs.writeFile('readME.md', readData, function (err) {
 if (err) throw err;
 console.log("Created!")
})
});



// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
