const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const QuienesSomosCommand = (my_phone_number, username, to_phone_number) => {
  let captionImage = `Saludos ${username} somos *_Telemark_* una empresa comprometida con el marketing digital 📢, somos un emprendimiento que surgió para ayudar a los emprendedores digitales a mejorar sus ventas por las redes sociales 📱, trabajamos para mejorar la experiencia de tus usuarios y brindarte herramientas automatizadas que disminuyan tus tareas rutinarias y pienses en lo más importante *_hacer crecer tu negocio_* 💪.`;

  const sendMessage = {
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: to_phone_number,
    type: "image",
    image: {
      link: "https://i.imgur.com/mdJ5UQh.png",
      caption: captionImage
    }
  }

  sendWppRequest({
    method: 'POST',
    data: sendMessage,
    phone_number_id: my_phone_number,
  });
  return;
}

module.exports = QuienesSomosCommand;