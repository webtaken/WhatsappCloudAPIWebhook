const SendImageMessage = require('../EssentialFunctions/SendImageMessage');

const QuienesSomosCommand = (my_phone_number, username, to_phone_number) => {
  let captionImage = `Saludos ${username} somos *_Telemark_* una empresa comprometida con el marketing digital 📢, somos un emprendimiento que surgió para ayudar a los emprendedores digitales a mejorar sus ventas por las redes sociales 📱, trabajamos para mejorar la experiencia de tus usuarios y brindarte herramientas automatizadas que disminuyan tus tareas rutinarias y pienses en lo más importante *_hacer crecer tu negocio_* 💪.`;
  const imageConf = {
    link: "https://i.imgur.com/mdJ5UQh.png",
    caption: captionImage
  }
  SendImageMessage(my_phone_number, to_phone_number, imageConf);
}

module.exports = QuienesSomosCommand;