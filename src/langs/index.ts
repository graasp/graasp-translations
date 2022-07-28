import messagesEN from './en/messages.json';
import messagesFR from './fr/messages.json';
import chatboxEN from './en/chatbox.json';
import chatboxFR from './fr/chatbox.json';
import authEN from './en/auth.json';
import authFR from './fr/auth.json';

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
