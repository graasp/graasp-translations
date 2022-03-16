import translationsEN from './en/translations';
import translationsFR from './fr/translations';
import chatboxEN from './en/chatbox';
import chatboxFR from './fr/chatbox';

// define namespaces
export const namespaces = {
  translations: 'translations',
  chatbox: 'chatbox',
};

const en = {
  [namespaces.translations]: translationsEN,
  [namespaces.chatbox]: chatboxEN,
};

const fr = {
  [namespaces.translations]: translationsFR,
  [namespaces.chatbox]: chatboxFR,
}

// other supported languages here

export {
  en,
  fr
};
