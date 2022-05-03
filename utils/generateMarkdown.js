// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ``;
  switch (license) {
    case 'apache':
      licenseBadge = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="124" height="20" role="img" aria-label="License: Apache 2.0"><title>License: Apache 2.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="124" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="73" height="20" fill="#007ec6"/><rect width="124" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="865" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="630">Apache 2.0</text><text x="865" y="140" transform="scale(.1)" fill="#fff" textLength="630">Apache 2.0</text></g></svg>`;
      break;
    case 'gpl':
      licenseBadge = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="146" height="20" role="img" aria-label="License: GNU GPL v3.00"><title>License: GNU GPL v3.00</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="146" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="95" height="20" fill="#007ec6"/><rect width="146" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="975" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="850">GNU GPL v3.00</text><text x="975" y="140" transform="scale(.1)" fill="#fff" textLength="850">GNU GPL v3.00</text></g></svg>`;
      break;
    case 'bsd':
      licenseBadge = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="20" role="img" aria-label="License: BSD 3"><title>License: BSD 3</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="96" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="45" height="20" fill="#007ec6"/><rect width="96" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="725" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">BSD 3</text><text x="725" y="140" transform="scale(.1)" fill="#fff" textLength="350">BSD 3</text></g></svg>`;
      break;
    case 'mit':
      licenseBadge = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="20" role="img" aria-label="License: MIT"><title>License: MIT</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="82" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="31" height="20" fill="#007ec6"/><rect width="82" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="655" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="210">MIT</text><text x="655" y="140" transform="scale(.1)" fill="#fff" textLength="210">MIT</text></g></svg>`;
      break;
    case 'opl':
      licenseBadge = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="210" height="20" role="img" aria-label="License: Open Software License 3.0"><title>License: Open Software License 3.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="210" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="51" height="20" fill="#555"/><rect x="51" width="159" height="20" fill="#007ec6"/><rect width="210" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">License</text><text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">License</text><text aria-hidden="true" x="1295" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1490">Open Software License 3.0</text><text x="1295" y="140" transform="scale(.1)" fill="#fff" textLength="1490">Open Software License 3.0</text></g></svg>`;
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
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  var licenseBadge = renderLicenseBadge(license);
  var licenseLink = renderLicenseLink(license);
  var licenseSection = renderLicenseSection(license, licenseLink);
  return `
  # ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${licenseSection}

  ## Questions
  Feel free to reach out to me either on Github or by email.
  [Github](https://github.com/${data.username})
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
