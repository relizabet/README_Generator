// function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  let licenseBadge;

  if (license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  `;
  }

  return `# ${data.title}

  ${licenseBadge}
  [![GitHub issues](https://img.shields.io/github/issues/${data.username}/${data.fileName}.svg)](https://GitHub.com/${data.username}/${data.filename}/issues/)

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [About the Project](#about-the-project)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)
  - [Contact](#contact)
  
  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}
    
  ## License
  
  ${data.license}

  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  
  ${data.questions}
  - [${data.username}](https://github.com/${data.username})
  - For additional questions please email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
