import messagesEN from './en/messages';
import messagesFR from './fr/messages';
import chatboxEN from './en/chatbox';
import chatboxFR from './fr/chatbox';
import authEN from './en/auth';
import authFR from './fr/auth';

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
