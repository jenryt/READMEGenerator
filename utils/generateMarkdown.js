// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({ license }) {
  let licenseBadge = "";
  if (license === "None") {
    licenseBadge = "";
  } else if (license === "Apache License 2.0") {
    licenseBadge =
      "![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green)";
  } else if (license === "GNU General Public License v3.0") {
    licenseBadge =
      "![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-yellow)";
  } else if (license === "MIT License") {
    licenseBadge =
      "![License: MIT](https://img.shields.io/badge/license-MIT-blue)";
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseBadge =
      "![License: BSD-2-Clause](https://img.shields.io/badge/license-BSD--2--Clause-orange)";
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge =
      "![License: BSD-3-Clause](https://img.shields.io/badge/license-BSD--3--Clause-red)";
  } else if (license === "Boost Software License 1.0") {
    licenseBadge =
      "![License: BSL-1.0](https://img.shields.io/badge/license-BSL--1.0-yellowgreen)";
  } else if (license === "Eclipse Public License 2.0") {
    licenseBadge =
      "![License: EPL-2.0](https://img.shields.io/badge/license-EPL--2.0-yellow)";
  } else if (license === "GNU Affero General Public License v3.0") {
    licenseBadge =
      "![License: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue)";
  } else if (license === "GNU General Public License v2.0") {
    licenseBadge =
      "![License: GPL-2.0](https://img.shields.io/badge/license-GPL--2.0-orange)";
  } else if (license === "GNU Lesser General Public License v2.1") {
    licenseBadge =
      "![License: LGPL](https://img.shields.io/badge/license-LGPL-red)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge =
      "![License: MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-yellowgreen)";
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}
//![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
//https://img.shields.io/badge/license-MESSAGE-COLOR

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink({ license }) {
  let licenseLink = "";
  if (license === "None") {
    licenseLink = "";
  } else if (license === "Apache License 2.0") {
    licenseLink = "https://opensource.org/license/apache-2-0/";
  } else if (license === "GNU General Public License v3.0") {
    licenseLink = "https://opensource.org/license/gpl-3-0/";
  } else if (license === "MIT License") {
    licenseLink = "https://opensource.org/license/mit/";
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseLink = "https://opensource.org/license/bsd-2-clause/";
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseLink = "https://opensource.org/license/bsd-3-clause/";
  } else if (license === "Boost Software License 1.0") {
    licenseLink = "https://opensource.org/license/bsl1-0-html/";
  } else if (license === "Eclipse Public License 2.0") {
    licenseLink = "https://opensource.org/license/epl-2-0/";
  } else if (license === "GNU Affero General Public License v3.0") {
    licenseLink = "https://opensource.org/license/agpl-v3/";
  } else if (license === "GNU General Public License v2.0") {
    licenseLink = "https://opensource.org/license/gpl-2-0/";
  } else if (license === "GNU Lesser General Public License v2.1") {
    licenseLink = "https://opensource.org/license/lgpl-2-1/";
  } else if (license === "Mozilla Public License 2.0") {
    licenseLink = "https://opensource.org/license/mpl-2-0/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({ license }) {
  let licenseSection;
  if (license === "Apache License 2.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "GNU General Public License v3.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "MIT License") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "Boost Software License 1.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "Eclipse Public License 2.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "GNU Affero General Public License v3.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "GNU General Public License v2.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "GNU Lesser General Public License v2.1") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else if (license === "Mozilla Public License 2.0") {
    licenseSection = `This project is licensed under the ${license} - see the link for detail`;
  } else {
    licenseSection = "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data);
  const licenseSection = renderLicenseSection(data);
  const licenseLink = renderLicenseLink(data);

  let readmeContent = `${licenseBadge}

# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseSection}
${licenseLink}

## Tests

${data.tests}

`;
  if (data.github) {
    readmeContent += `My GitHub: ${data.github}\n`;
  }
  if (data.email) {
    readmeContent += `My email: ${data.email}`;
  }
  return readmeContent;
}

module.exports = generateMarkdown;
