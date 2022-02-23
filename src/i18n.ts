import I18n from 'i18n';

const i18n = new I18n({
  locales: ['en', 'fr'],
  staticCatalog: {
    en: require('./lang/en.js'),
    fr: require('./lang/fr.js'),
  },
  defaultLocale: 'en',
});

export default i18n;
