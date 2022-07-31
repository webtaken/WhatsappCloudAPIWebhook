const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios");

require("dotenv").config();

const app = express().use(body_parser.json());
const app_port = process.env.PORT || 8000;

app.listen(app_port, () => {
  console.log(`Webhook is running on port ${app_port}.`);
});

const app_token = process.env.APP_TOKEN;
const webhook_token = process.env.WEBHOOK_TOKEN;


// to verify the callback url from dashboard side - cloud api side
app.get("/webhook", (req, res) => {
  let mode = req.query["hub.mode"];
  let challenge = req.query["hub.challenge"];
  let token = req.query["hub.verify_token"];


  if (mode && token) {
    if (mode === "subscribe" && token === webhook_token) {
      res.status(200).send(challenge);
    } else {
      res.status(403);
    }
  }

});


app.post("/webhook", (req, res) => {
  let body_params = req.body;

  console.log(JSON.stringify(body_params, null, 2));

  if (body_params.object) {
    if (body_params.entry &&
      body_params.entry[0].changes &&
      body_params.entry[0].changes[0].value.messages &&
      body_params.entry[0].changes[0].value.messages[0]) {

      let phone_number_id = body_params.entry[0].changes[0].value.metadata.phone_number_id;
      let from = body_params.entry[0].changes[0].value.messages[0].from;
      let message_body = body_params.entry[0].changes[0].value.messages[0].text.body;

      axios({
        method: "POST",
        url: `https://graph.facebook.com/v13.0/${phone_number_id}/messages?access_token=${app_token}`,
        data: {
          messaging_product: "whatsapp",
          preview_url: false,
          recipient_type: "individual",
          to: from,
          type: "text",
          text: {
            body: `reply to ${message_body}`,
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});


app.get("/", (req, res) => {
  res.status(200).send("Webhook setup whatsapp API");
});