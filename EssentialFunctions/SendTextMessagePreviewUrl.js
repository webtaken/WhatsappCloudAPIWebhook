const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const SendTextMessagePreviewUrl = (my_phone_number, to_phone_number, message) => {
  const sendMessage = {
    "messaging_product": "whatsapp",
    "to": to_phone_number,
    "text": {
      "preview_url": true,
      "body": message
    }
  }

  sendWppRequest({
    method: 'POST',
    data: sendMessage,
    phone_number_id: my_phone_number,
  });
};

module.exports = SendTextMessagePreviewUrl;