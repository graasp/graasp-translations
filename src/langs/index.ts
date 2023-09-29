import messagesEN from './en/messages.json';
import messagesFR from './fr/messages.json';
import messagesDE from './de/messages.json';
import messagesIT from './it/messages.json';
import messagesAR from './ar/messages.json';
import chatboxEN from './en/chatbox.json';
import chatboxFR from './fr/chatbox.json';
import chatboxDE from './de/chatbox.json';
import chatboxIT from './it/chatbox.json';
import chatboxAR from './ar/chatbox.json';
import authEN from './en/auth.json';
import authFR from './fr/auth.json';
import authDE from './de/auth.json';
import authIT from './it/auth.json';
import authAR from './ar/auth.json';
import categoriesEN from './en/categories.json';
import categoriesFR from './fr/categories.json';
import categoriesDE from './de/categories.json';
import categoriesIT from './it/categories.json';
import categoriesAR from './ar/categories.json';
import commonEN from './en/common.json';
import commonFR from './fr/common.json';
import commonDE from './de/common.json';
import commonIT from './it/common.json';
import commonAR from './ar/common.json';
import permissionLevelEN from './en/permissionLevel.json';
import permissionLevelFR from './fr/permissionLevel.json';
import permissionLevelDE from './de/permissionLevel.json';
import permissionLevelIT from './it/permissionLevel.json';
import permissionLevelAR from './ar/permissionLevel.json';
import itemTypeEN from './en/itemType.json';
import itemTypeFR from './fr/itemType.json';
import itemTypeDE from './de/itemType.json';
import itemTypeIT from './it/itemType.json';
import itemTypeAR from './ar/itemType.json';
import contextEN from './en/context.json';
import contextFR from './fr/context.json';
import contextDE from './de/context.json';
import contextIT from './it/context.json';
import contextAR from './ar/context.json';
import uppyEN from './en/uppy.json';
import uppyFR from './fr/uppy.json';
import uppyDE from './de/uppy.json';
import uppyIT from './it/uppy.json';
import uppyAR from './ar/uppy.json';
import associationEN from './en/association.json';
import associationFR from './fr/association.json';
import associationDE from './de/association.json';
import associationIT from './it/association.json';
import associationAR from './ar/association.json';
import mailEN from './en/mail.json';
import mailFR from './fr/mail.json';
import mailDE from './de/mail.json';
import mailIT from './it/mail.json';
import mailAR from './ar/mail.json';
import flagEN from './en/flag.json';
import flagFR from './fr/flag.json';
import flagDE from './de/flag.json';
import flagIT from './it/flag.json';
import flagAR from './ar/flag.json';
import maxWidthEN from './en/maxWidth.json';
import maxWidthFR from './fr/maxWidth.json';
import maxWidthDE from './de/maxWidth.json';
import maxWidthIT from './it/maxWidth.json';
import maxWidthAR from './ar/maxWidth.json';

// define namespaces
export const namespaces = {
  auth: 'auth',
  association: 'association',
  categories: 'categories',
  chatbox: 'chatbox',
  common: 'common',
  enums: 'enums',
  library: 'library',
  mail: 'mail',
  messages: 'messages',
  uppy: 'uppy',
};

const en = {
  [namespaces.auth]: authEN,
  [namespaces.association]: associationEN,
  [namespaces.categories]: categoriesEN,
  [namespaces.chatbox]: chatboxEN,
  [namespaces.common]: commonEN,
  [namespaces.enums]: {
    ...permissionLevelEN,
    ...itemTypeEN,
    ...contextEN,
    ...flagEN,
    ...maxWidthEN,
  },
  [namespaces.mail]: mailEN,
  [namespaces.messages]: messagesEN,
  [namespaces.uppy]: uppyEN,
};

const fr = {
  [namespaces.auth]: authFR,
  [namespaces.association]: associationFR,
  [namespaces.categories]: categoriesFR,
  [namespaces.chatbox]: chatboxFR,
  [namespaces.common]: commonFR,
  [namespaces.enums]: {
    ...permissionLevelFR,
    ...itemTypeFR,
    ...contextFR,
    ...flagFR,
    ...maxWidthFR,
  },
  [namespaces.mail]: mailFR,
  [namespaces.messages]: messagesFR,
  [namespaces.uppy]: uppyFR,
};

const de = {
  [namespaces.association]: associationDE,
  [namespaces.auth]: authDE,
  [namespaces.categories]: categoriesDE,
  [namespaces.chatbox]: chatboxDE,
  [namespaces.common]: commonDE,
  [namespaces.enums]: {
    ...permissionLevelDE,
    ...itemTypeDE,
    ...contextDE,
    ...flagDE,
    ...maxWidthDE,
  },
  [namespaces.mail]: mailDE,
  [namespaces.messages]: messagesDE,
  [namespaces.uppy]: uppyDE,
};

const it = {
  [namespaces.association]: associationIT,
  [namespaces.auth]: authIT,
  [namespaces.categories]: categoriesIT,
  [namespaces.chatbox]: chatboxIT,
  [namespaces.common]: commonIT,
  [namespaces.enums]: {
    ...permissionLevelIT,
    ...itemTypeIT,
    ...contextIT,
    ...flagIT,
    ...maxWidthIT,
  },
  [namespaces.mail]: mailIT,
  [namespaces.messages]: messagesIT,
  [namespaces.uppy]: uppyIT,
};

const ar = {
  [namespaces.association]: associationAR,
  [namespaces.auth]: authAR,
  [namespaces.categories]: categoriesAR,
  [namespaces.chatbox]: chatboxAR,
  [namespaces.common]: commonAR,
  [namespaces.enums]: {
    ...permissionLevelAR,
    ...itemTypeAR,
    ...contextAR,
    ...flagAR,
    ...maxWidthAR,
  },
  [namespaces.mail]: mailAR,
  [namespaces.messages]: messagesAR,
  [namespaces.uppy]: uppyAR,
};

// other supported languages here
export { en, fr, de, it, ar };
