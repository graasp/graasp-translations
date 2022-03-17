import messagesEN from './en/messages';
import messagesFR from './fr/messages';
import chatboxEN from './en/chatbox';
import chatboxFR from './fr/chatbox';

// define namespaces
export const namespaces = {
  messages: 'messages',
  chatbox: 'chatbox',
};

const en = {
  [namespaces.messages]: messagesEN,
  [namespaces.chatbox]: chatboxEN,
};

const fr = {
  [namespaces.messages]: messagesFR,
  [namespaces.chatbox]: chatboxFR,
}

// other supported languages here

export {
  en,
  fr
};
