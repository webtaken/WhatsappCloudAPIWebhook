const axios = require("axios");

const app_token = process.env.APP_TOKEN;
const webhook_token = process.env.WEBHOOK_TOKEN;


const sendWppRequest = (conf) => {
  axios(
    {
      method: conf.method,
      url: `https://graph.facebook.com/v13.0/${conf.phone_number_id}/messages?access_token=${app_token}`,
      data: conf.data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.APP_TOKEN}`
      }
    });
  return;
};

module.exports = sendWppRequest;