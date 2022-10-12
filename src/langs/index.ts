import messagesEN from './en/messages.json';
import messagesFR from './fr/messages.json';
import messagesDE from './de/messages.json';
import chatboxEN from './en/chatbox.json';
import chatboxFR from './fr/chatbox.json';
import chatboxDE from './de/chatbox.json';
import authEN from './en/auth.json';
import authFR from './fr/auth.json';
import authDE from './de/auth.json';
import libraryEN from './en/library.json';
import libraryFR from './fr/library.json';
import libraryDE from './de/library.json';
import categoriesEN from './en/categories.json';
import categoriesFR from './fr/categories.json';
import categoriesDE from './de/categories.json';
import builderEN from './en/builder.json';
import builderFR from './fr/builder.json';
import builderDE from './de/builder.json';
import commonEN from './en/common.json';
import commonFR from './fr/common.json';
import commonDE from './de/common.json';
import accountEN from './en/account.json';
import accountFR from './fr/account.json';
import accountDE from './de/account.json';

// define namespaces
export const namespaces = {
  account: 'account',
  auth: 'auth',
  builder: 'builder',
  categories: 'categories',
  chatbox: 'chatbox',
  common: 'common',
  library: 'library',
  messages: 'messages',
};

const en = {
  [namespaces.account]: accountEN,
  [namespaces.auth]: authEN,
  [namespaces.builder]: builderEN,
  [namespaces.categories]: categoriesEN,
  [namespaces.chatbox]: chatboxEN,
  [namespaces.common]: commonEN,
  [namespaces.library]: libraryEN,
  [namespaces.messages]: messagesEN,
};

const fr = {
  [namespaces.account]: accountFR,
  [namespaces.auth]: authFR,
  [namespaces.builder]: builderFR,
  [namespaces.categories]: categoriesFR,
  [namespaces.chatbox]: chatboxFR,
  [namespaces.common]: commonFR,
  [namespaces.library]: libraryFR,
  [namespaces.messages]: messagesFR,
};

const de = {
  [namespaces.account]: accountDE,
  [namespaces.auth]: authDE,
  [namespaces.builder]: builderDE,
  [namespaces.categories]: categoriesDE,
  [namespaces.chatbox]: chatboxDE,
  [namespaces.common]: commonDE,
  [namespaces.library]: libraryDE,
  [namespaces.messages]: messagesDE,
};

// other supported languages here
export { en, fr, de };
