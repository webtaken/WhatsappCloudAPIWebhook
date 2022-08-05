const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const HelpCommand = (my_phone_number, username, to_phone_number) => {
  let messages_list = [
    `Hola 👋 ${username} soy Telebot 🤖 el asistente virtual de Telemark y he venido a ayudarte, a continuación te muestro los comandos disponibles y su descripción, recuerda agregar '!' antes de cada comando: `,
    "!ayuda: 📃 este comando te muestra nuestra la lista de comandos disponibles y su descripción.",
    "!quienes_somos: ✋ conoce mas de esta naciente compañía de marketing digital.",
    "!mision: 🎗 nuestros valores nos definen, conoce nuestro propósito.",
    "!servicios: 📢 lo que tenemos para ofrecer a tu pequeña, mediana o gran empresa.",
    "!contacto: 📞 tenemos otras redes sociales disponibles, contáctanos 😉."
  ];

  // enviamos toda la lista de mensajes
  messages_list.forEach((message) => {
    const sendMessage = {
      messaging_product: "whatsapp",
      preview_url: false,
      recipient_type: "individual",
      to: to_phone_number,
      type: "text",
      text: {
        body: message
      }
    }

    sendWppRequest({
      method: 'POST',
      data: sendMessage,
      phone_number_id: my_phone_number,
    });
  });
  return;
}

module.exports = HelpCommand;