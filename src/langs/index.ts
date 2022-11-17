import messagesEN from './en/messages.json';
import messagesFR from './fr/messages.json';
import messagesDE from './de/messages.json';
import messagesIT from './it/messages.json';
import chatboxEN from './en/chatbox.json';
import chatboxFR from './fr/chatbox.json';
import chatboxDE from './de/chatbox.json';
import chatboxIT from './it/chatbox.json';
import authEN from './en/auth.json';
import authFR from './fr/auth.json';
import authDE from './de/auth.json';
import authIT from './it/auth.json';
import libraryEN from './en/library.json';
import libraryFR from './fr/library.json';
import libraryDE from './de/library.json';
import libraryIT from './it/library.json';
import categoriesEN from './en/categories.json';
import categoriesFR from './fr/categories.json';
import categoriesDE from './de/categories.json';
import categoriesIT from './it/categories.json';
import builderEN from './en/builder.json';
import builderFR from './fr/builder.json';
import builderDE from './de/builder.json';
import builderIT from './it/builder.json';
import commonEN from './en/common.json';
import commonFR from './fr/common.json';
import commonDE from './de/common.json';
import commonIT from './it/common.json';
import accountEN from './en/account.json';
import accountFR from './fr/account.json';
import accountDE from './de/account.json';
import accountIT from './it/account.json';
import permissionLevelEN from './en/permissionLevel.json';
import permissionLevelFR from './fr/permissionLevel.json';
import permissionLevelDE from './de/permissionLevel.json';
import permissionLevelIT from './it/permissionLevel.json';
import itemTypeEN from './en/itemType.json';
import itemTypeFR from './fr/itemType.json';
import itemTypeDE from './de/itemType.json';
import itemTypeIT from './it/itemType.json';
import contextEN from './en/context.json';
import contextFR from './fr/context.json';
import contextDE from './de/context.json';
import contextIT from './it/context.json';
import uppyEN from './en/uppy.json';
import uppyFR from './fr/uppy.json';
import uppyDE from './de/uppy.json';
import uppyIT from './it/uppy.json';
import associationEN from './en/association.json';
import associationFR from './fr/association.json';
import associationDE from './de/association.json';
import associationIT from './it/association.json';

// define namespaces
export const namespaces = {
  account: 'account',
  auth: 'auth',
  association: 'association',
  builder: 'builder',
  categories: 'categories',
  chatbox: 'chatbox',
  common: 'common',
  enums: 'enums',
  library: 'library',
  messages: 'messages',
  uppy: 'uppy',
};

const en = {
  [namespaces.account]: accountEN,
  [namespaces.auth]: authEN,
  [namespaces.association]: associationEN,
  [namespaces.builder]: builderEN,
  [namespaces.categories]: categoriesEN,
  [namespaces.chatbox]: chatboxEN,
  [namespaces.common]: commonEN,
  [namespaces.enums]: {
    ...permissionLevelEN,
    ...itemTypeEN,
    ...contextEN,
  },
  [namespaces.library]: libraryEN,
  [namespaces.messages]: messagesEN,
  [namespaces.uppy]: uppyEN,
};

const fr = {
  [namespaces.account]: accountFR,
  [namespaces.auth]: authFR,
  [namespaces.association]: associationFR,
  [namespaces.builder]: builderFR,
  [namespaces.categories]: categoriesFR,
  [namespaces.chatbox]: chatboxFR,
  [namespaces.common]: commonFR,
  [namespaces.enums]: {
    ...permissionLevelFR,
    ...itemTypeFR,
    ...contextFR,
  },
  [namespaces.library]: libraryFR,
  [namespaces.messages]: messagesFR,
  [namespaces.uppy]: uppyFR,
};

const de = {
  [namespaces.account]: accountDE,
  [namespaces.association]: associationDE,
  [namespaces.auth]: authDE,
  [namespaces.builder]: builderDE,
  [namespaces.categories]: categoriesDE,
  [namespaces.chatbox]: chatboxDE,
  [namespaces.common]: commonDE,
  [namespaces.enums]: {
    ...permissionLevelDE,
    ...itemTypeDE,
    ...contextDE,
  },
  [namespaces.library]: libraryDE,
  [namespaces.messages]: messagesDE,
  [namespaces.uppy]: uppyDE,
};

const it = {
  [namespaces.account]: accountIT,
  [namespaces.association]: associationIT,
  [namespaces.auth]: authIT,
  [namespaces.builder]: builderIT,
  [namespaces.categories]: categoriesIT,
  [namespaces.chatbox]: chatboxIT,
  [namespaces.common]: commonIT,
  [namespaces.enums]: {
    ...permissionLevelIT,
    ...itemTypeIT,
    ...contextIT,
  },
  [namespaces.library]: libraryIT,
  [namespaces.messages]: messagesIT,
  [namespaces.uppy]: uppyIT,
};

// other supported languages here
export { en, fr, de, it };
