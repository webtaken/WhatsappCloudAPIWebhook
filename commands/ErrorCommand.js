const SendTextMessage = require('../EssentialFunctions/SendTextMessage');

const ErrorCommand = (my_phone_number, username, to_phone_number) => {
  const errorMessage = `Hola ${username} el comando que escribiste no fue reconocido, escribe *!ayuda* para ver la lista de comandos disponibles.`
  SendTextMessage(my_phone_number, to_phone_number, errorMessage);
};

module.exports = ErrorCommand;