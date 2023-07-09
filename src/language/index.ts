import ILanguagesObject from "./type";

const languagesObject: ILanguagesObject = {
  en: {
    header: {
      aboutLink: "About",
      contactLink: "Contact",
    },
    homePage: {
      title: "Home",
      description: "Hello! This is an application with React Context API",
    },
    aboutPage: {
      title: "About Application",
      description:
        "This is an application with NextJs + React, it is intended to practice using the React Context API",
    },
    contactPage: {
      title: "Contact",
      description: "Contact us at example@example.com",
    },
  },
  "pt-br": {
    header: {
      aboutLink: "Sobre",
      contactLink: "Contato",
    },
    homePage: {
      title: "Tela Incial",
      description: "Olá! Este é um aplicativo com React Context API",
    },
    aboutPage: {
      title: "Sobre a Aplicação",
      description:
        "Esta é uma aplicação com NextJs + React, destina-se a praticar usando a API React Context",
    },
    contactPage: {
      title: "Contato",
      description: "Contate-nos em exemplo@exemplo.com",
    },
  },
  es: {
    header: {
      aboutLink: "Acerca",
      contactLink: "Contacto",
    },
    homePage: {
      title: "Pantalla de inicio",
      description: "¡Hola! Esta es una aplicación con React Context API",
    },
    aboutPage: {
      title: "Acerca de la aplicación",
      description:
        "Esta es una aplicación con NextJs + React, está destinada a practicar el uso de la API React Context",
    },
    contactPage: {
      title: "Contacto",
      description: "Contáctenos en ejemplo@ejemplo.com",
    },
  },
};

export default languagesObject;
