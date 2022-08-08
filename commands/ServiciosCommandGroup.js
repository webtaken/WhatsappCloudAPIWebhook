const SendDocumentMessage = require('../EssentialFunctions/SendDocumentMessage');
const SendTextMessage = require('../EssentialFunctions/SendTextMessage');
const SendTextMessagePreviewUrl = require('../EssentialFunctions/SendTextMessagePreviewUrl');
const sendWppRequest = require('../FlowFunctions/sendWhatsappRequest');

let services_data = {
  automatization: {
    chatbot: {
      id: "automatization_chatbot_1",
      description: "Automatiza la mensajería 💬 con tus clientes mediante un chatbot 🤖 para *Whatsapp*, todo totalmente personalizado para las necesidades de tu negocio, contáctanos para mostrarte una demo."
    },
    promotions: {
      id: "automatization_promotions_2",
      description: "Creamos campañas promocionales de manera automática para tu negocio 📊, atrae nuevos prospectos e informa a tus clientes recurrentes sobre las nuevas promociones 💬en tu negocio, todo totalmente personalizado para tus necesidades."
    }
  },
  marketing: {
    content_generation: {
      id: "marketing_content_generation_1",
      description: "Brindamos el servicio de generación de contenido 🤳para tu negocio. Generamos contenido para las principales redes sociales *(Instragram, Facebook, Tiktok, Whatsapp, etc)* para que puedas conectar de una manera más cercana con tus clientes."
    }
  },
  // este es un campo extra no un servicio
  services_file: {
    id: "file_services_content",
    filename: "Servicios de Telemark",
    file_link: "https://drive.google.com/file/d/1bMvQwdA4Je_QVvivKVDfS6IrK3XUVqQF/view?usp=sharing",
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
                id: services_data.automatization.chatbot.id,
                title: "Chatbots de Whatsapp"
              },
              {
                id: services_data.automatization.promotions.id,
                title: "Campañas automatizadas"
              }
            ]
          },
          {
            title: "Marketing",
            rows: [
              {
                id: services_data.marketing.content_generation.id,
                title: "Generación de contenido"
              }
            ]
          },
          {
            title: "Archivos",
            rows: [
              {
                id: services_data.services_file.id,
                title: "Documento de servicios"
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

const SendChatbotServiceInformation = (my_phone_number, to_phone_number) => {
  const chatbotServiceMessage = services_data.automatization.chatbot.description;
  SendTextMessage(my_phone_number, to_phone_number, chatbotServiceMessage);
};

const SendPromotionsServiceInformation = (my_phone_number, to_phone_number) => {
  const promotionsServiceMessage = services_data.automatization.promotions.description;
  SendTextMessage(my_phone_number, to_phone_number, promotionsServiceMessage);
};

const SendContentGenerationServiceInformation = (my_phone_number, to_phone_number) => {
  const contentGenerationServiceMessage = services_data.marketing.content_generation.description;
  SendTextMessage(my_phone_number, to_phone_number, contentGenerationServiceMessage);
};

const SendServicesFile = (my_phone_number, to_phone_number) => {
  const servicesFileText = `Visualiza nuestros servicios en: ${services_data.services_file.file_link}`;
  SendTextMessagePreviewUrl(my_phone_number, to_phone_number, servicesFileText);
};

module.exports.ServiciosCommand = ServiciosCommand;
module.exports.SendChatbotServiceInformation = SendChatbotServiceInformation;
module.exports.SendPromotionsServiceInformation = SendPromotionsServiceInformation;
module.exports.SendContentGenerationServiceInformation = SendContentGenerationServiceInformation;
module.exports.SendServicesFile = SendServicesFile;
module.exports.services_data = services_data;

