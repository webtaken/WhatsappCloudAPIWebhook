const CommandSelector = (message) => {
  if (message.type === "text") {
    const textMessage = message.text.body;

    // no sigue con la sintaxis de los comandos (prefijo '!' antes de cada comando)
    // retornamos null porque el mensaje no es válido
    if (textMessage[0] !== '!') {
      return null;
    }
    const command_split = textMessage.split(" ");
    let command = command_split[0];
    return command;
  }
  return null;
};

module.exports = CommandSelector;