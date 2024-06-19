import messagesEN from './en/messages.json';
import messagesFR from './fr/messages.json';
import messagesDE from './de/messages.json';
import messagesIT from './it/messages.json';
import messagesAR from './ar/messages.json';
import messagesES from './es/messages.json';
import chatboxEN from './en/chatbox.json';
import chatboxFR from './fr/chatbox.json';
import chatboxDE from './de/chatbox.json';
import chatboxIT from './it/chatbox.json';
import chatboxAR from './ar/chatbox.json';
import chatboxES from './es/chatbox.json';
import categoriesEN from './en/categories.json';
import categoriesFR from './fr/categories.json';
import categoriesDE from './de/categories.json';
import categoriesIT from './it/categories.json';
import categoriesAR from './ar/categories.json';
import categoriesES from './es/categories.json';
import commonEN from './en/common.json';
import commonFR from './fr/common.json';
import commonDE from './de/common.json';
import commonIT from './it/common.json';
import commonAR from './ar/common.json';
import commonES from './es/common.json';
import permissionLevelEN from './en/permissionLevel.json';
import permissionLevelFR from './fr/permissionLevel.json';
import permissionLevelDE from './de/permissionLevel.json';
import permissionLevelIT from './it/permissionLevel.json';
import permissionLevelAR from './ar/permissionLevel.json';
import permissionLevelES from './es/permissionLevel.json';
import itemTypeEN from './en/itemType.json';
import itemTypeFR from './fr/itemType.json';
import itemTypeDE from './de/itemType.json';
import itemTypeIT from './it/itemType.json';
import itemTypeAR from './ar/itemType.json';
import itemTypeES from './es/itemType.json';
import contextEN from './en/context.json';
import contextFR from './fr/context.json';
import contextDE from './de/context.json';
import contextIT from './it/context.json';
import contextAR from './ar/context.json';
import contextES from './es/context.json';
import uppyEN from './en/uppy.json';
import uppyFR from './fr/uppy.json';
import uppyDE from './de/uppy.json';
import uppyIT from './it/uppy.json';
import uppyAR from './ar/uppy.json';
import uppyES from './es/uppy.json';
import associationEN from './en/association.json';
import associationFR from './fr/association.json';
import associationDE from './de/association.json';
import associationIT from './it/association.json';
import associationAR from './ar/association.json';
import associationES from './es/association.json';
import flagEN from './en/flag.json';
import flagFR from './fr/flag.json';
import flagDE from './de/flag.json';
import flagIT from './it/flag.json';
import flagAR from './ar/flag.json';
import flagES from './es/flag.json';
import maxWidthEN from './en/maxWidth.json';
import maxWidthFR from './fr/maxWidth.json';
import maxWidthDE from './de/maxWidth.json';
import maxWidthIT from './it/maxWidth.json';
import maxWidthAR from './ar/maxWidth.json';
import maxWidthES from './es/maxWidth.json';
import actionTypesEN from './en/actionTypes.json';
import actionTypesFR from './fr/actionTypes.json';
import actionTypesDE from './de/actionTypes.json';
import actionTypesIT from './it/actionTypes.json';
import actionTypesAR from './ar/actionTypes.json';
import actionTypesES from './es/actionTypes.json';

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
  actionTypes: 'actionTypes',
};

const en = {
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
  [namespaces.messages]: messagesEN,
  [namespaces.uppy]: uppyEN,
  [namespaces.actionTypes]: actionTypesEN,
};

const fr = {
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
  [namespaces.messages]: messagesFR,
  [namespaces.uppy]: uppyFR,
  [namespaces.actionTypes]: actionTypesFR,
};

const de = {
  [namespaces.association]: associationDE,
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
  [namespaces.messages]: messagesDE,
  [namespaces.uppy]: uppyDE,
  [namespaces.actionTypes]: actionTypesDE,
};

const it = {
  [namespaces.association]: associationIT,
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
  [namespaces.messages]: messagesIT,
  [namespaces.uppy]: uppyIT,
  [namespaces.actionTypes]: actionTypesIT,
};

const ar = {
  [namespaces.association]: associationAR,
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
  [namespaces.messages]: messagesAR,
  [namespaces.uppy]: uppyAR,
  [namespaces.actionTypes]: actionTypesAR,
};

const es = {
  [namespaces.association]: associationES,
  [namespaces.categories]: categoriesES,
  [namespaces.chatbox]: chatboxES,
  [namespaces.common]: commonES,
  [namespaces.enums]: {
    ...permissionLevelES,
    ...itemTypeES,
    ...contextES,
    ...flagES,
    ...maxWidthES,
  },
  [namespaces.messages]: messagesES,
  [namespaces.uppy]: uppyES,
  [namespaces.actionTypes]: actionTypesES,
};

// other supported languages here
export { en, fr, de, it, ar, es };
