import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCodes from "./codes-en";
import nlCodes from "./codes-nl";


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
    .init({
        resources,
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

export type codeAnswer = {
    code: string,
    answer: string
}

export const qCodes = [
    'QRA?',
    'QRB?',
    'QRG?',
    'QRL?',
    'QRM?',
    'QRN?',
    'QRO?',
    'QRP?',
    'QRQ?',
    'QRS?',
    'QRT?',
    'QRU?',
    'QRV?',
    'QRX?',
    'QRZ?',
    'QSA?',
    'QSB?',
    'QSL?',
    'QSO?',
    'QSP?',
    'QSQ?',
    'QSY?',
    'QTH?'
]
