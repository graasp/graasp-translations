import messagesEN from './en/messages.json' with { type: 'json' };
import messagesFR from './fr/messages.json' with { type: 'json' };
import messagesDE from './de/messages.json' with { type: 'json' };
import messagesIT from './it/messages.json' with { type: 'json' };
import messagesAR from './ar/messages.json' with { type: 'json' };
import messagesES from './es/messages.json' with { type: 'json' };
import chatboxEN from './en/chatbox.json' with { type: 'json' };
import chatboxFR from './fr/chatbox.json' with { type: 'json' };
import chatboxDE from './de/chatbox.json' with { type: 'json' };
import chatboxIT from './it/chatbox.json' with { type: 'json' };
import chatboxAR from './ar/chatbox.json' with { type: 'json' };
import chatboxES from './es/chatbox.json' with { type: 'json' };
import categoriesEN from './en/categories.json' with { type: 'json' };
import categoriesFR from './fr/categories.json' with { type: 'json' };
import categoriesDE from './de/categories.json' with { type: 'json' };
import categoriesIT from './it/categories.json' with { type: 'json' };
import categoriesAR from './ar/categories.json' with { type: 'json' };
import categoriesES from './es/categories.json' with { type: 'json' };
import commonEN from './en/common.json' with { type: 'json' };
import commonFR from './fr/common.json' with { type: 'json' };
import commonDE from './de/common.json' with { type: 'json' };
import commonIT from './it/common.json' with { type: 'json' };
import commonAR from './ar/common.json' with { type: 'json' };
import commonES from './es/common.json' with { type: 'json' };
import permissionLevelEN from './en/permissionLevel.json' with { type: 'json' };
import permissionLevelFR from './fr/permissionLevel.json' with { type: 'json' };
import permissionLevelDE from './de/permissionLevel.json' with { type: 'json' };
import permissionLevelIT from './it/permissionLevel.json' with { type: 'json' };
import permissionLevelAR from './ar/permissionLevel.json' with { type: 'json' };
import permissionLevelES from './es/permissionLevel.json' with { type: 'json' };
import itemTypeEN from './en/itemType.json' with { type: 'json' };
import itemTypeFR from './fr/itemType.json' with { type: 'json' };
import itemTypeDE from './de/itemType.json' with { type: 'json' };
import itemTypeIT from './it/itemType.json' with { type: 'json' };
import itemTypeAR from './ar/itemType.json' with { type: 'json' };
import itemTypeES from './es/itemType.json' with { type: 'json' };
import contextEN from './en/context.json' with { type: 'json' };
import contextFR from './fr/context.json' with { type: 'json' };
import contextDE from './de/context.json' with { type: 'json' };
import contextIT from './it/context.json' with { type: 'json' };
import contextAR from './ar/context.json' with { type: 'json' };
import contextES from './es/context.json' with { type: 'json' };
import uppyEN from './en/uppy.json' with { type: 'json' };
import uppyFR from './fr/uppy.json' with { type: 'json' };
import uppyDE from './de/uppy.json' with { type: 'json' };
import uppyIT from './it/uppy.json' with { type: 'json' };
import uppyAR from './ar/uppy.json' with { type: 'json' };
import uppyES from './es/uppy.json' with { type: 'json' };
import associationEN from './en/association.json' with { type: 'json' };
import associationFR from './fr/association.json' with { type: 'json' };
import associationDE from './de/association.json' with { type: 'json' };
import associationIT from './it/association.json' with { type: 'json' };
import associationAR from './ar/association.json' with { type: 'json' };
import associationES from './es/association.json' with { type: 'json' };
import flagEN from './en/flag.json' with { type: 'json' };
import flagFR from './fr/flag.json' with { type: 'json' };
import flagDE from './de/flag.json' with { type: 'json' };
import flagIT from './it/flag.json' with { type: 'json' };
import flagAR from './ar/flag.json' with { type: 'json' };
import flagES from './es/flag.json' with { type: 'json' };
import maxWidthEN from './en/maxWidth.json' with { type: 'json' };
import maxWidthFR from './fr/maxWidth.json' with { type: 'json' };
import maxWidthDE from './de/maxWidth.json' with { type: 'json' };
import maxWidthIT from './it/maxWidth.json' with { type: 'json' };
import maxWidthAR from './ar/maxWidth.json' with { type: 'json' };
import maxWidthES from './es/maxWidth.json' with { type: 'json' };
import actionTypesEN from './en/actionTypes.json' with { type: 'json' };
import actionTypesFR from './fr/actionTypes.json' with { type: 'json' };
import actionTypesDE from './de/actionTypes.json' with { type: 'json' };
import actionTypesIT from './it/actionTypes.json' with { type: 'json' };
import actionTypesAR from './ar/actionTypes.json' with { type: 'json' };
import actionTypesES from './es/actionTypes.json' with { type: 'json' };

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
