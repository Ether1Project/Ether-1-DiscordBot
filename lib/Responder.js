const similarity = require("string-similarity");

class Responder {
  constructor() {
    this.commands = require("../commands.json");
  }

  getResponse(search) {
    const listCommands = Object.keys(this.commands);

    const { bestMatch } = similarity.findBestMatch(search, listCommands);

    const { target, rating } = bestMatch;

    if (rating >= 0.6) {
      return { foundResponse: true, response: this.commands[target] };
    } else {
      return { foundResponse: false };
    }
  }
}

module.exports = Responder;
