import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./translation/pl.json";
import en from "./translation/en.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pl: {
        translation: pl,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n;
