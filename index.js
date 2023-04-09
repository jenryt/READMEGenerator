// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//  Tests, and Questions
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
    message: "What are the steps for installation?",
    name: "installation",
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
    name: "Contributing",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then((response) => {
  console.log(response);
});
