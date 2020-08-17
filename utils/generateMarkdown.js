const fs = require("fs");
const inquirer = require("inquirer");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
