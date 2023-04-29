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
    type: "input",
    message: "What are the steps for installation?",
    name: "installation",
  },
  {
    type: "input",
    message: "How this app is used?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Include the guidelines for how to contribute to the software project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter your test information for this project.",
    name: "tests",
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
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
    ],
  },

  {
    type: "confirm",
    message: "Do you want to include your gitHub username?",
    name: "includeGitHub",
    default: true,
  },
  {
    type: "input",
    message: "Please provide your gitHub username.",
    name: "github",
    when: (answer) => answer.includeGitHub === true,
  },
  {
    type: "confirm",
    message: "Do you want to include your email address?",
    name: "includeEmail",
    default: true,
  },
  {
    type: "input",
    message: "Please provide your emial address.",
    name: "email",
    when: (answer) => answer.includeEmail === true,
  },
];

inquirer.prompt(questions).then((data) => {
  console.log(data);
  fs.writeFile("response.json", JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("success");
  });
  fs.writeFile("README.md", generateMarkdown(data), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("success2");
  });
});
