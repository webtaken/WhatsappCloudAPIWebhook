const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios");
const wpp_extractor_data = require("./FlowFunctions/DataExtractor");
const markAsRead = require("./commands/read");
const DataExtractor = require("./FlowFunctions/DataExtractor");

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

  console.log("Body of the request: ");
  console.log(JSON.stringify(body_params, null, 2));

  // extraemos la data de los mensajes
  const extracted_data = DataExtractor(body_params);

  // verificamos que hay datos disponibles
  if (extracted_data) {
    let message_id = extracted_data.message.id;
    // marcar el mensaje como leído
    // enviamos nuestro el id del mensaje recibido y nuestro número de teléfono
    markAsRead(message_id, extracted_data.my_phone_number);

    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

});


app.get("/", (req, res) => {
  res.status(200).send("Webhook setup whatsapp API");
});