const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

let services_metadata = {
  automatization: {
    chatbot: {
      id: "automatization_chatbot_1",
      send_description: () => {

        "Automatiza la mensajería 🗨 con tus clientes mediante un chatbot 🤖 para *Whatsapp* totalmente personalizado para las necesidades de tu negocio, contáctanos para mostrarte una demo."
      }
    },
    promotions: {
      id: "automatization_promotions_2",
      description: "¿Deseas automatizar tus campañas promocionales 📊 y atraer nuevos clientes? hazlo automáticamente con nosotros, te ayudamos con la expansión de tu negocio informando a cada uno de tus clientes recurrentes cuándo se lanza una nueva promoción en tu negocio, así como la prospección de nuevos y potenciales clientes mediante el envío masivo de publicidad mediante whatsapp."
    }
  },
  marketing: {
    content_generation: {
      id: "marketing_content_generation_1",
      description: "Brindamos el servicio de generación de contenido 🤳 para tu negocio. Generamos contenido para las principales redes sociales *(Instragram, Facebook, Tiktok, Whatsapp, etc)* para que puedas conectarte de una manera más cercana a tus clientes."
    }
  }
};


const ServiciosCommand = (my_phone_number, username, to_phone_number) => {

  const servicesList = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: to_phone_number,
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: "Servicios de Telemark" // nunca colocar en las secciones de títulos un * (asterisco)
      },
      body: {
        text: `Hola ${username}, a continuación te mostramos la lista de nuestros servicios, selecciona un servicio de cada sección para ver su descripción o también puedes seleccionar la opción *PDF* para descargar nuestro documento 📄 de presentación donde te mostramos todos los servicios.`
      },
      action: {
        button: "Ver servicios",
        sections: [
          {
            title: "Automatización",
            rows: [
              {
                id: services_metadata.automatization.chatbot.id,
                title: "Chatbots de Whatsapp"
              },
              {
                id: services_metadata.automatization.promotions.id,
                title: "Campañas automatizadas"
              }
            ]
          },
          {
            title: "Marketing",
            rows: [
              {
                id: services_metadata.marketing.content_generation.id,
                title: "Generación de contenido"
              }
            ]
          }
        ]
      }
    }
  };


  sendWppRequest({
    method: 'POST',
    data: servicesList,
    phone_number_id: my_phone_number,
  });
  return;
}


module.exports.ServiciosCommand = ServiciosCommand;