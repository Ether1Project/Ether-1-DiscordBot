const similarity = require("string-similarity");

class Responder {
  constructor() {
    const { commands, aliases, prefixes } = require("../commands.json");

    this.prefixes = prefixes;
    this.commands = _buildCommandsWithAliases(commands, aliases);
  }

  getResponse(search, store) {
    search = _stripSearch(search, this.prefixes);
    let response = _findResponseWithCommand(search, this.commands);
    let foundResponse = !!response;

    if (foundResponse) {
      response = _substituteValues(response, store);
    }

    return { foundResponse, response };
  }
}

/// private methods

function _stripSearch(search, prefixes) {
  for (prefix of prefixes) {
    search = search.replace(prefix, "");
  }

  search = search.replace(/[\s]+/g, " ");
  search = search.trim();

  return search;
}

function _substituteValues(response, store) {
  // this is a reaction only response
  if (response.text == null) return response;

  // find all the keys in response
  const matches = response.text.match(/\{[\w]+\}/g);

  // exit if there is nothing to replace
  if (matches == null) return response;

  // replace them with matching store values
  for (match of matches) {
    // make sure to remove the braces first
    const key = match.replace("{", "").replace("}", "");
    const value = store[key];
    response.text = response.text.replace(match, value);
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

  response = commands[target];

  if (rating >= 0.55) {
    return response;
  } else {
    return null;
  }
}

module.exports.Responder = Responder;

module.exports.test = {
  _stripSearch,
  _substituteValues,
  _buildCommandsWithAliases,
  _findResponseWithCommand
};
