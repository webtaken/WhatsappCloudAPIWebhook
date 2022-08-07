const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const SendImageMessage = (my_phone_number, to_phone_number, imageConf) => {
  const imageMessage = {
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: to_phone_number,
    type: "image",
    image: {
      link: imageConf.link,
      caption: imageConf.caption
    }
  }

  sendWppRequest({
    method: 'POST',
    data: imageMessage,
    phone_number_id: my_phone_number,
  });
};

module.exports = SendImageMessage;