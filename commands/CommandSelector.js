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
  else if (message.type === "interactive") {
    if (message.interactive === "list_reply") {
      // cuando es la respuesta de una lista entonces el usuario seleccionó un servicio de la lista
      // retornamos el string "!servicios <id_de_la_respuesta>"
      const command = `!servicios ${message.interactive.list_reply.id}`;
      return command;
    }
  }
  return null;
};

module.exports = CommandSelector;