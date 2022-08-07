const SendTextMessage = require('../EssentialFunctions/SendTextMessage');

const AyudaCommand = (my_phone_number, username, to_phone_number) => {
  let ayudaMessage = `Hola 👋 ${username} soy Telebot 🤖 el asistente virtual de Telemark estoy aquí para ayudarte, a continuación te muestro los comandos disponibles y su descripción, recuerda agregar *!* antes de cada comando:\n
    *!ayuda*: 📃 este comando te muestra nuestra la lista de comandos disponibles y su descripción.\n
    *!quienes_somos*: ✋ conoce más de esta naciente compañía de marketing digital y nuestros objetivos.\n
    *!servicios*: 📢 lo que tenemos para ofrecer a tu pequeña, mediana o gran empresa.\n
    *!contacto*: 📞 tenemos otras redes sociales disponibles, contáctanos 😉.`;

  SendTextMessage(my_phone_number, to_phone_number, ayudaMessage);
}

module.exports = AyudaCommand;