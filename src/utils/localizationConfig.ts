import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enCodes from "../data/codes-en";
import nlCodes from "../data/codes-nl";

const resources = {
    en: {
        translation: {
            ...enCodes
        }
    },
    nl: {
        translation: {
            ...nlCodes
        }
    }
}


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;