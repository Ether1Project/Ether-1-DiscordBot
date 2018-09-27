const similarity = require("string-similarity");

class Responder {
  constructor() {
    this.commands = require("../commands.json");
  }

  getResponse(search) {
    return _findResponseWithCommand(search, this.commands);
  }
}

/// private methods

function _findResponseWithCommand(search, commands) {
  const listCommands = Object.keys(commands);

  const { bestMatch } = similarity.findBestMatch(search, listCommands);

  const { target, rating } = bestMatch;

  if (rating >= 0.55) {
    return { foundResponse: true, response: commands[target] };
  } else {
    return { foundResponse: false, response: null };
  }
}

module.exports.Responder = Responder;

module.exports.test = {
  _findResponseWithCommand
};
