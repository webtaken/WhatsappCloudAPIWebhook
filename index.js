const express = require("express");
const body_parser = require("body-parser");
const axios = require("axios");

const DataExtractor = require("./FlowFunctions/DataExtractor");
// modulos de comandos
const markAsRead = require("./commands/read");
const CommandSelector = require("./commands/CommandSelector");
const AyudaCommand = require("./commands/AyudaCommand");
const ErrorCommand = require("./commands/ErrorCommand");
const QuienesSomosCommand = require("./commands/QuienesSomosCommand");
const ServiciosCommand = require("./commands/ServiciosCommand").ServiciosCommand;

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

  // console.log("Body of the request: ");
  // console.log(JSON.stringify(body_params, null, 2));

  // extraemos la data de los mensajes
  const extracted_data = DataExtractor(body_params);
  console.log(extracted_data);
  // verificamos que hay datos disponibles
  if (extracted_data) {
    let message_id = extracted_data.message.id;
    // marcar el mensaje como leído
    // enviamos nuestro el id del mensaje recibido y nuestro número de teléfono
    markAsRead(message_id, extracted_data.my_phone_number);

    // ahora verificamos que el siguiente mensaje sea un comando disponible
    let command = CommandSelector(extracted_data.message);
    // si no es nulo proseguimos
    if (command) {
      switch (command) {
        case "!ayuda":
          // enviamos el mensaje de ayuda
          AyudaCommand(
            extracted_data.my_phone_number,
            extracted_data.sender_name,
            extracted_data.sender_phone_number);
          break;
        case "!quienes_somos":
          QuienesSomosCommand(
            extracted_data.my_phone_number,
            extracted_data.sender_name,
            extracted_data.sender_phone_number);
          break;
        case "!servicios":
          break;
        case "!contacto":
          break;
        default: // por defecto se manejará como error
          ErrorCommand(
            extracted_data.my_phone_number,
            extracted_data.sender_name,
            extracted_data.sender_phone_number);
          break;
      }

    }
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

});


app.get("/", (req, res) => {
  res.status(200).send("Webhook setup whatsapp API");
});