// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ``;
  switch (license) {
    case 'apache':
      licenseBadge = `<div align="right">![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)</div>`;
      break;
    case 'gpl':
      licenseBadge = `<div align="right">![badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue.svg)</div>`;
      break;
    case 'bsd':
      licenseBadge = `<div align="right">![badge](https://img.shields.io/badge/License-BSD%203-blue.svg)</div>`;
      break;
    case 'mit':
      licenseBadge = `<div align="right">![badge](https://img.shields.io/badge/License-MIT-blue.svg)</div>`;
      break;
    case 'opl':
      licenseBadge = `<div align="right">![badge](https://img.shields.io/badge/License-Open%20Software%20License%203.0-blue.svg)</div>`;
      break;
    case 'none':
      licenseBadge= ``;
      break;
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ``
  switch (license) {
    case 'apache':
      licenseLink =`https://www.apache.org/licenses/LICENSE-2.0.txt`;
      break;
    case 'gpl':
      licenseLink =`https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case 'bsd':
      licenseLink =`https://spdx.org/licenses/BSD-3-Clause-Clear.html`;
      break;
    case 'mit':
      licenseLink =`https://opensource.org/licenses/MIT`;
      break;
    case 'opl':
      licenseLink =`https://opensource.org/licenses/OSL-3.0`;
      break;
    case 'none':
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseLink) {
  let licenseSection

  switch (license) {
    case 'apache':
      licenseSection = `This project is under the Apache 2.0 license and can be viewed [here](${licenseLink})`;
      break;
    case 'gpl':
      licenseSection = `This project is under the GNU General Public License v3.0 and can be viewed [here](${licenseLink})`;
      break;
    case 'bsd':
      licenseSection = `This project is under the BSD 3 license and can be viewed [here](${licenseLink})`;
      break;
    case 'mit':
      licenseSection = `This project is under the MIT license and can be viewed [here](${licenseLink})`;
      break;
    case 'opl':
      licenseSection = `This project is under the Open Software License 3.0 and can be viewed [here](${licenseLink})`;
      break;
    case 'none':
      licenseSection =``;
      break;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  var licenseBadge = renderLicenseBadge(license);
  var licenseLink = renderLicenseLink(license);
  var licenseSection = renderLicenseSection(license, licenseLink);
  return `
  # ${data.title}${licenseBadge}

  **Table of Contents:**
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ***

  ## Description
  ${data.description}

  ***

  ## Installation
  ${data.install}

  ***

  ## Usage
  ${data.usage}

  ***

  ## Contribution
  ${data.contribution}

  ***

  ## Test
  ${data.test}

  ***

  ## License
  ${licenseSection}

  ***

  ## Questions
  Feel free to reach out to me either on Github or by email.<br>
  [Github](https://github.com/${data.username})<br>
  Email: ${data.email}
`;
}

// function generateMarkdown(data) {
//   console.log(data.license)
//   console.log(data.username)
//   var license = data.license;
//   var licenseLink = renderLicenseLink(license);
//   var licenseSection = renderLicenseSection(license);
  
//   const usernamealtered = licenseLink
//   return usernamealtered
// }

module.exports = generateMarkdown;
