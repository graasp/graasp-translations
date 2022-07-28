import messagesEN from './messages/en.json';
import messagesFR from './messages/fr.json';
import chatboxEN from './chatbox/en.json';
import chatboxFR from './chatbox/fr.json';
import authEN from './auth/en.json';
import authFR from './auth/fr.json';

// define namespaces
export const namespaces = {
  auth: 'auth',
  chatbox: 'chatbox',
  messages: 'messages',
};

const en = {
  [namespaces.auth]: authEN,
  [namespaces.chatbox]: chatboxEN,
  [namespaces.messages]: messagesEN,
};

const fr = {
  [namespaces.auth]: authFR,
  [namespaces.chatbox]: chatboxFR,
  [namespaces.messages]: messagesFR,
};

// other supported languages here

export { en, fr };
