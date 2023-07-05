import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAM from "./locales/am/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    am: {
        translation: translationAM
    }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "am",
    resources,
    detection: {
        caches: ['cookie']
    }
})

export default i18n