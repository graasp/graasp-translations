import i18n, { InitOptions } from 'i18next';

import { ar, de, en, fr, it, es, namespaces } from './langs/index.js';

export const DEFAULT_LANG = 'en';

export const buildI18n = (
  defaultNamespace = namespaces.messages,
  debug?: boolean,
  options?: Partial<InitOptions>,
) => {
  i18n.init({
    resources: {
      en,
      fr,
      de,
      it,
      ar,
      es,
    },
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    // debug only when not in production
    debug: debug ?? process.env.NODE_ENV !== 'production',
    // define accessible namespaces
    ns: Object.values(namespaces),
    // define default namespace
    defaultNS: defaultNamespace,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    ...options,
  });

  return i18n;
};

export const langs = {
  // bg: "български",
  // ca: "Català",
  // cs: "čeština",
  de: 'Deutsch',
  // el: "Ελληνικά",
  en: 'English',
  es: 'Español',
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
