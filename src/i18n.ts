import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from 'i18next-http-backend';
import { env } from './config/config';

i18n
.use(i18nBackend)
.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: `${env.domain}/i18n/{{lng}}.json`,
    },
    })
;

export default i18n;
