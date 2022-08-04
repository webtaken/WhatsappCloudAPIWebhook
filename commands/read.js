const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

const markAsRead = (wpp_message_id, my_phone_number) => {

  const read_data = {
    messaging_product: "whatsapp",
    status: "read",
    message_id: wpp_message_id
  }

  sendWppRequest({
    method: 'POST',
    data: read_data,
    phone_number_id: my_phone_number,
  });

  return;
}