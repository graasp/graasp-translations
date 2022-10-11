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

// define namespaces
export const namespaces = {
  auth: 'auth',
  builder: 'builder',
  categories: 'categories',
  chatbox: 'chatbox',
  library: 'library',
  messages: 'messages',
};

const en = {
  [namespaces.auth]: authEN,
  [namespaces.builder]: builderEN,
  [namespaces.categories]: categoriesEN,
  [namespaces.chatbox]: chatboxEN,
  [namespaces.library]: libraryEN,
  [namespaces.messages]: messagesEN,
};

const fr = {
  [namespaces.auth]: authFR,
  [namespaces.builder]: builderFR,
  [namespaces.categories]: categoriesFR,
  [namespaces.chatbox]: chatboxFR,
  [namespaces.library]: libraryFR,
  [namespaces.messages]: messagesFR,
};

const de = {
  [namespaces.auth]: authDE,
  [namespaces.builder]: builderDE,
  [namespaces.categories]: categoriesDE,
  [namespaces.chatbox]: chatboxDE,
  [namespaces.library]: libraryDE,
  [namespaces.messages]: messagesDE,
};

// other supported languages here
export { en, fr, de };
