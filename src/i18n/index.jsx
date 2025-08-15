import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/locales/en';
import ptbr from '@/i18n/locales/ptbr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      pt: { 
        translation: ptbr,
      },
    },
    lng: 'pt', 
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
