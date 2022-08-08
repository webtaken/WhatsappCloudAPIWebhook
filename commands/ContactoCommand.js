const SendImageMessage = require('../EssentialFunctions/SendImageMessage');

const ContactoCommand = (my_phone_number, username, to_phone_number) => {
  const contactoImageConf = {
    link: "https://i.imgur.com/QIVQYEZ.jpg",
    caption: `${username} puedes contactarnos 💬 por los siguientes medios: +51969601133, +51933254667 (recomendado *Whatsapp business*) o telemark.inc.pe@gmail.com`
  };
  SendImageMessage(my_phone_number, to_phone_number, contactoImageConf);
};

module.exports = ContactoCommand;