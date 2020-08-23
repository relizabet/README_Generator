// function to generate markdown for README && choose license badge
function generateMarkdown(data) {
  const license = data.license;
  let licenseBadge;
  let licenseLink;
  let imgDesc = data.imgDesc;
  let imgPath = data.imgPath;

  if (license === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (license === "GNU Lesser General Public License v3.0") {
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
  } else if (license === "GNU Affero General Public License v3.0") {
    licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
  } else if (license === "The Unlicense") {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    licenseLink = "https://choosealicense.com/licenses/unlicense/";
  } else if (license === "Apache License 2.0") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "GNU General Public License v3.0") {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  }

  return `# ${data.title}

  ${licenseBadge} [![GitHub issues](https://img.shields.io/github/issues/${data.username}/${data.title}.svg)](https://GitHub.com/${data.username}/${data.title}/issues/) [![GitHub issues-closed](https://img.shields.io/github/issues-closed/${data.username}/${data.title}.svg)](https://GitHub.com/${data.username}/${data.title}/issues?q=is%3Aissue+is%3Aclosed)

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
  ![${imgDesc}](${imgPath})
  ![${imgDesc}](${imgPath})
  ![${imgDesc}](${imgPath})

    
  ## License
  
  [${data.license}](${licenseLink})

  ## Contributing
  
  ${data.contributing}
  
  ## Testing
  
  ${data.tests}

  ## Questions
  
  ${data.questions}
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
