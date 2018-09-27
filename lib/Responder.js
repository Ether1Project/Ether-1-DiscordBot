const similarity = require("string-similarity");

class Responder {
  constructor() {
    const { commands, aliases } = require("../commands.json");

    this.commands = _buildCommandsWithAliases(commands, aliases);
  }

  getResponse(search) {
    return _findResponseWithCommand(search, this.commands);
  }
}

/// private methods

function _substituteValues(response, store) {
  // find all the keys in response
  const matches = response.match(/\{[\w]+\}/g);
  // make sure to remove the braces first
  // const keys = matches.map(match => match.replace("{", "").replace("}", ""));

  // replace them with matching store values
  for (match of matches) {
    const key = match.replace("{", "").replace("}", "");
    const value = store[key];
    response = response.replace(match, store[key]);
  }

  return response;
}

function _buildCommandsWithAliases(commands, aliases) {
  /// copy the commands object
  const library = { ...commands };

  /// insert copies of commands by their aliases
  for ([command, aliases] of Object.entries(aliases)) {
    for (alias of aliases) {
      library[alias] = commands[command];
    }
  }
  return library;
}

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
  _substituteValues,
  _buildCommandsWithAliases,
  _findResponseWithCommand
};
