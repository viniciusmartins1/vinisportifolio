import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en.json";
import es from "./languages/es.json";
import ptBR from "./languages/ptBR.json";

import cvEN from "../assets/pdf/vinicius-martins-cv_EN.pdf";
import cvES from "../assets/pdf/vinicius-martins-cv_ES.pdf";
import cvPT from "../assets/pdf/vinicius-martins-cv_PT.pdf";

const Languages = {
  EN: "en",
  PT_BR: "pt-BR",
  ES: "es",
} as const;

export type Languages = (typeof Languages)[keyof typeof Languages];

export interface ILanguages {
  lng: Languages;
  label: string;
  translations: unknown;
  cvLink: string;
}

const i18nLanguages: ILanguages[] = [
  {
    label: "EN",
    lng: Languages.EN,
    translations: en,
    cvLink: cvEN,
  },
  {
    label: "ES",
    lng: Languages.ES,
    translations: es,
    cvLink: cvES,
  },
  {
    label: "PT",
    lng: Languages.PT_BR,
    translations: ptBR,
    cvLink: cvPT,
  },
];

const resources = i18nLanguages.reduce(
  (i, { lng, translations }) => ({ ...i, [lng]: translations }),
  {},
);

i18n.use(initReactI18next).init({
  resources,
  lng: Languages.EN,
  fallbackLng: Languages.EN,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, i18nLanguages };
