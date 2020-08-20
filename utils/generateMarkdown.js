// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Requirements

  ${data.installation}
  
  ## Table of Contents
  
  - [About the Project](#about-the-project)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)
  - [Contact](#contact)
  
  ## About The Project

  ${data.description}

  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Testing
  
  ${data.tests}
  
  ## License
  
  ${data.license}
  
  ## Contact
  
  ${data.questions}
`;
}

module.exports = generateMarkdown;
