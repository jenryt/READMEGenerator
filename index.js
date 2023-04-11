// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        return "Please make sure to enter a title";
      }
    },
  },
  {
    type: "input",
    message: "Please write a brief description of your project.",
    name: "description",
  },
  {
    type: "confirm",
    message: "Do you want to include a table of contents?",
    name: "tableOfContents",
  },
  {
    type: "input",
    message: "Please list your table of content.",
    name: "contentsList",
    when: (answer) => answer.tableOfContents === true,
  },
  {
    type: "input",
    message: "What are the steps for installation?",
    name: "installation",
    when: (answer) => {
      return !answer.installationNext || answer.addInstallation === true;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add another installation step?",
    name: "addInstallation",
    default: false,
    when: (answer) => {
      return !answer.installationNext || answer.addInstallation === true;
    },
  },
  {
    type: "input",
    message: "What is the next step for installation?",
    name: "installationNext",
    when: (answer) => answer.addInstallation === true,
  },
  {
    type: "input",
    message: "What is this project for?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license do you want?",
    name: "license",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "Include the contributors of this project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "Please enter your test information of your project.",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your test information of your project.",
    name: "tests",
  },
  {
    type: "confirm",
    message: "Do yo like to include your contact information for user",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

${data.tableOfContents}

## Installation

${data.installation}
${data.installationNext}

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions
${data.questions}


  
  
  
  
  `;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then((response) => {
  console.log(response);
  fs.writeFile("response.json", JSON.stringify(response, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("success");
  });
  fs.writeFile("README2.md", writeToFile(response), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("success2");
  });
});
