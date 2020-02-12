function generateMarkdown(data) {
  return `
# ${data.title}

##Description
`;
}

module.exports = {generateMarkdown};
