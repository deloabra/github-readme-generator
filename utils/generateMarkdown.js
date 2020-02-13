function generateMarkdown(data, user) {

  return `
# ${data.title}

![language](https://img.shields.io/badge/Language-${data.language}-blue)

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
${user.data.avatar_url !== undefined && user.data.avatar_url !== null? `![Profile Picture](${user.data.avatar_url})` : ""}
<br/>Contact me at ${data.email !== ""? data.email : user.data.email}
`;
}

module.exports = {generateMarkdown};
