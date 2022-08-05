const DataExtractor = (wpp_object) => {
  if (wpp_object.object) {
    // verificar si hay números
    if (wpp_object.entry &&
      wpp_object.entry[0].changes &&
      wpp_object.entry[0].changes[0].value.messages &&
      wpp_object.entry[0].changes[0].value.messages[0]) {

      let my_phone_number = wpp_object.entry[0].changes[0].value.metadata.phone_number_id;
      let sender_phone_number = wpp_object.entry[0].changes[0].value.messages[0].from;
      let sender_name = wpp_object.entry[0].changes[0].value.contacts[0].profile.name;
      let message = wpp_object.entry[0].changes[0].value.messages[0];

      return {
        my_phone_number,
        sender_phone_number,
        sender_name,
        message
      }
    }
  }
  return null;
};

module.exports = DataExtractor;