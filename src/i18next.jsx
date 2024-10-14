import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslations from "../public/locales/uz.json";
import enTranslations from "../public/locales/en.json";
import ruTranslations from "../public/locales/ru.json";

i18next
  .use(LanguageDetector) // Agar kerak bo'lsa
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Default til
    debug: true, // Til yuklashdagi muammolarni ko'rish uchun
    resources: {
      uz: {
        translation: uzTranslations,
      },
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
    interpolation: {
      escapeValue: false, // XSS xavfini oldini olish uchun React escapeni ishlatadi
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "cookie"], // Tillarni aniqlash tartibi
      caches: ["localStorage", "cookie"], // Tillarni qaysi joyda saqlash
    },
  });

export default i18next;
