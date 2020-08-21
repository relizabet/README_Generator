// require fs to interact with file system
const fs = require("fs");
// a 'collection of common interactive command line user interfaces'
const inquirer = require("inquirer");
// gives me access to promisify the fs.writeFile method
const util = require("util");
// require generateMarkdown & License files
const generateMarkdown = require("./utils/generateMarkdown");
const generateLicense = require("./utils/generateLicense");

// return with a promise instead of callback
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for  to answer about their readme file
const questions = [
  {
    type: "input",
    name: "author",
    message: "What is your full name?",
    default: "Jane Doe",
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects title?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
    default: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How should your project be installed?",
    default: "How should your project be installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is your application used?",
    default: "How is your application used?",
  },
  {
    type: "input",
    name: "imgPath",
    message:
      "Please include the path for at least one image (e.g. './assets/questions.png'.",
    default: "./assets/img.png",
  },
  {
    type: "input",
    name: "imgDesc",
    message: "Please include a description for the image you have included.",
    default: "Image Description",
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
    default: "MIT",
  },
  {
    type: "input",
    name: "contributing",
    message: "How should other developers contribute to your project?",
    default: "How should other developers contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests should be run on this project?",
    default: "What tests should be run on this project?",
  },
  {
    type: "input",
    name: "questions",
    message: "If the user has any questions where should they be directed to?",
    default: "If the user has any questions where should they be directed to?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
    default: "username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "user@email.com",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // call writeFileAsync and pass in filename and data
  writeFileAsync(fileName, data);
}

// function to ask the questions in the terminal
function askQuestions() {
  // use inquirer to prompt the questions and (return) the answers
  return inquirer.prompt(questions);
}

// function to initialize program
async function init() {
  try {
    // store await askquestions to pass into generateMarkdown
    const answers = await askQuestions();
    // write the file
    writeToFile("readme_0.md", generateMarkdown(answers));
    writeToFile("LICENSE.md", generateLicense(answers));
  } catch (err) {
    // return any errors
    console.log(err);
  }
}

// run program
init();
