const ap = require("./api");

function generateMarkdown(data) {

  const user = ap.api.getUser(data.username);

  return `
# ${data.title}

##Description

![Profile Picture](${user.avatar_url})
`;
}

module.exports = {generateMarkdown};
