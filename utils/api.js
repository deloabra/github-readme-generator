const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios
      .get(queryUrl)
      .then(response => response);
  }
};

module.exports = {api};
