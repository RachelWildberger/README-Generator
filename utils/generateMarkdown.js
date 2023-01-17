// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case 'GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
    case 'BSD 3-clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
      default:
        return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GPLv2':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case 'BSD 3-clause':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'Unlicense':
      return `http://unlicense.org/`;
    default:
      return ``;
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
let generateMarkdown = (data) => {
  return `
  # ${data.project}

  ## Table of Contents
  - [Project description](#Description)
  - [Install](#Install)
  - [Useage](#useage)
  - [Collaborators](#collaborators)
  - [Assets](#assets)
  - [GitHub](#github)
  - [License](#license)

  ## Description 
  ${data.description} 
  
  ## Install 
  ${data.install} 
  
  ## Useage 
  ${data.useage} 
  
  ## Collaborators 
  ${data.collaborators} 
  
  ## Assets 
  ${data.assets} 
  
  ## GitHub Username
  @${data.github} 
  
  ## License 
  ${data.license}  

`;
}

module.exports = generateMarkdown;
