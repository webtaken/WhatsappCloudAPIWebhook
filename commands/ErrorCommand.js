const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const ErrorCommand = (my_phone_number, username, to_phone_number) => {
  const sendMessage = {
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: to_phone_number,
    type: "text",
    text: {
      body: `Hola ${username} el comando que escribiste no fue reconocido, escribe "!ayuda" para
      ver la lista de comandos disponibles.`
    }
  }

  sendWppRequest({
    method: 'POST',
    data: sendMessage,
    phone_number_id: my_phone_number,
  });
};

module.exports = ErrorCommand;