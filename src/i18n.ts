import i18n from 'i18next';
import { en, fr, de, it, ar, namespaces } from './langs';

export const DEFAULT_LANG = 'en';

const buildI18n = (defaultNamespace = namespaces.messages) => {
  i18n.init({
    resources: {
      en,
      fr,
      de,
      it,
      ar,
    },
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    // define accessible namespaces
    ns: Object.values(namespaces),
    // define default namespace
    defaultNS: defaultNamespace,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

  return i18n;
};

const langs = {
  // bg: "български",
  // ca: "Català",
  // cs: "čeština",
  de: 'Deutsch',
  // el: "Ελληνικά",
  en: 'English',
  // es: "Español",
  // et: "Eesti",
  // fi: "Suomi",
  fr: 'Français',
  // hu: "Magyar",
  it: 'Italiano',
  // ja: '日本語',
  // ka: "ქართული",
  // lt: "lietuvių kalba",
  // lv: "Latviešu",
  // nl: "Nederlands",
  // pt: "Português",
  // ro: "Română",
  // ru: "Русский",
  // sk: "Slovenský",
  // sl: "Slovenščina",
  // sr: "српски језик",
  // sw: 'Kiswahili',
  // tr: "Türkçe",
  // uk: "Українська",
  // vi: "Tiếng Việt",
  // zh: "简体中文",
  // zh_tw: "繁體中文",
  ar: 'العربية',
};

export { langs };

export default buildI18n;
