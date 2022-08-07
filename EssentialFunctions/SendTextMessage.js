const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const SendTextMessage = (my_phone_number, to_phone_number, message) => {
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
};

module.exports = SendTextMessage;