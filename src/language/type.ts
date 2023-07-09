export type ScreenLanguage = {
  title: string;
  description: string;
};

export type Language = {
  header: {
    aboutLink: string;
    contactLink: string;
  };
  homePage: ScreenLanguage;
  aboutPage: ScreenLanguage;
  contactPage: ScreenLanguage;
};

export type Languages = "en" | "pt-br" | "es";

export default interface ILanguagesObject {
  en: Language;
  "pt-br": Language;
  es: Language;
}
