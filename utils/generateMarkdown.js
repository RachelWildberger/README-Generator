// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'BSD 3-clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      default:
        return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'BSD 3-clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
 };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// let renderLicenseSection = (license) => {};


// TODO: Create a function to generate markdown for README
// ${this.renderLicenseBadge(data.license)}
let generateMarkdown = (data) => {

  const licenseLink = renderLicenseLink(data);
  const licenseBadge = renderLicenseBadge(data.license);

  return `
  # ${data.project}

  ${licenseBadge}${licenseLink}

  ## Table of Contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Useage](#useage)
  - [Testing](#testing)
  - [Collaborators](#collaborators)
  - [Assets](#assets)
  - [GitHub](#github)
  - [License](#license)

  ## Description 
  ${data.description} 
  
  ## Installation
  ${data.install} 
  
  ## Useage 
  ${data.useage} 

  ## Testing 
  ${data.testing} 
  
  ## Collaborators 
  ${data.collaborators} 
  
  ## Assets 
  ${data.assets} 
  
  ## Questions?
  Contact me at:

  GitHub: @${data.github} 

  Email: ${data.email}
  
  ## License 
  ${data.project} is licensed under the 
  
  ${licenseBadge}${licenseLink}.
`;
};

module.exports = generateMarkdown;
