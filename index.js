const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// const generateMarkdown = require("ugenerateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How should your project be installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is your application used?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How should other developers contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests should be run on this project",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license:",
    choices: [
      "MIT",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "GNU Affero General Public License v3.0",
      "The Unlicense",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data, err) {
  try {
    writeFileAsync();
  } catch (err) {
    console.log(err);
  }
}

// function to initialize program
function init() {
  return inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

init();

writeToFile("readme.md", generateMarkdown(answers));

// Game Plan
// maybe remove return (try both ways)
// writeToFile('readme.md', generateMarkdown(answers))
// write out writetofile
// finish the
