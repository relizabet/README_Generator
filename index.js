// require file system to interact with file system 'closely modeled around standard POSIX functions'
const fs = require("fs");
// a 'collection of common interactive command line user interfaces'
const inquirer = require("inquirer");
// gives me access to promisify the fs.writeFile method
const util = require("util");
// gives access to the generate Markdown function located in the separate generateMarkdown file
const generateMarkdown = require("./utils/generateMarkdown");

// util.promisify 'takes a funciton following the common error-first callback style... and returns a version that returns promises
// a promise is 'an object representing the eventual completion or failure of an aysnchronous operation'
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for  to answer about their readme file
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
    type: "input",
    name: "questions",
    message: "If the user has any questions where should they be directed to?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// needs a promise
function askQuestions() {
  inquirer.prompt(questions);
}

// function to initialize program
function init() {
  try {
    askQuestions();
    writeToFile("readme_0.md", generateMarkdown(questions));
    // console.log(data.title);
  } catch (err) {
    console.log(err);
  }
}

//
init();

// Game Plan
// maybe remove return (try both ways)
// writeToFile('readme.md', generateMarkdown(answers))
// write out writetofile
// finish the

// what happens
//
// ask the questions
// [x] store questions in a constant
// [ ] when the program inits - inquire.prompt the
//     questions and then get those answers
// [ ]
// put the answers into the template
// [ ] inside init/inquirer.prompt function to fill in
//     the template
// [ ]
// write the template to the file
