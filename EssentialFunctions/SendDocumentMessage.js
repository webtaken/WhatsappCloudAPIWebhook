const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const SendDocumentMessage = (my_phone_number, to_phone_number, documentConf) => {
  const documentMessage = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: to_phone_number,
    type: "document",
    document: {
      link: documentConf.link,
      caption: documentConf.caption
    }
  }

  sendWppRequest({
    method: 'POST',
    data: documentMessage,
    phone_number_id: my_phone_number,
  });
};

module.exports = SendDocumentMessage;