// error messages, used in error classes
// the content is human readible for server errors to make sense
export const FAILURE_MESSAGES = {
  // graasp core
  ITEM_NOT_FOUND: 'Item not found',
  TOO_MANY_DESCENDANTS: 'Too many descendants',
  USER_CANNOT_READ_ITEM: 'User cannot read item',
  USER_CANNOT_WRITE_ITEM: 'User cannot write item',
  USER_CANNOT_ADMIN_ITEM: 'User cannot admin item',
  INVALID_MEMBERSHIP:
    'Membership with this permission level cannot be created for this member in this item',
  ITEM_MEMBERSHIP_NOT_FOUND: 'Item membership not found',
  MODIFY_EXISTING:
    'Cannot create membership for member in item. Should modify existing one',
  INVALID_PERMISSION_LEVEL:
    'Cannot change to a worse permission level than the one inherited',
  HIERARCHY_TOO_DEEP: 'Hierarchy too deep',
  TOO_MANY_CHILDREN: 'Too many children',
  INVALID_MOVE_TARGET: 'Invalid item to move to',
  MEMBER_NOT_FOUND: 'Member not found',
  CANNOT_MODIFY_OTHER_MEMBERS: 'Member cannot modify other member',
  TOO_MANY_MEMBERSHIP: 'Too many memberships',
  MEMBER_CANNOT_ACCESS: 'Member does not have a membership in item',
  DATABASE_ERROR: 'Database error',
  UNEXPECTED_ERROR: 'Unexpected error',

  // file upload limiter
  STORAGE_EXCEEDED: 'The allowed storage is full',
  FILE_SIZE_NOT_FOUND: 'The file size was not found',
};

export const DEFAULT_FAILURE_MESSAGE = FAILURE_MESSAGES.UNEXPECTED_ERROR;

// sucess messages, used for front end feedback
// the content is keys since they should always be translated
export const SUCCESS_MESSAGES = {
  RESTORE_ITEMS: 'RESTORE_ITEMS',
  CREATE_ITEM: 'CREATE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_ITEMS: 'DELETE_ITEMS',
  MOVE_ITEM: 'MOVE_ITEM',
  MOVE_ITEMS: 'MOVE_ITEMS',
  COPY_ITEM: 'COPY_ITEM',
  COPY_ITEMS: 'COPY_ITEMS',
  EDIT_ITEM: 'EDIT_ITEM',
  SHARE_ITEM: 'SHARE_ITEM',
  UPLOAD_FILES: 'UPLOAD_FILES',
  SIGN_OUT: 'SIGN_OUT',
  EDIT_MEMBER: 'EDIT_MEMBER',
  COPY_MEMBER_ID_TO_CLIPBOARD: 'COPY_MEMBER_ID_TO_CLIPBOARD',
  EDIT_ITEM_MEMBERSHIP: 'EDIT_ITEM_MEMBERSHIP',
  DELETE_ITEM_MEMBERSHIP: 'DELETE_ITEM_MEMBERSHIP',
  POST_ITEM_FLAG: 'POST_ITEM_FLAG',
  COPY_ITEM_LINK_TO_CLIPBOARD: 'COPY_ITEM_LINK_TO_CLIPBOARD',
  RECYCLE_ITEM: 'RECYCLE_ITEM',
  RECYCLE_ITEMS: 'RECYCLE_ITEMS',
  UPLOAD_ITEM_THUMBNAIL: 'UPLOAD_ITEM_THUMBNAIL',
  UPLOAD_AVATAR: 'UPLOAD_AVATAR',
  IMPORT_ZIP: 'IMPORT_ZIP',
  POST_ITEM_CATEGORY: 'POST_ITEM_CATEGORY',
  DELETE_ITEM_CATEGORY: 'DELETE_ITEM_CATEGORY',
  PUT_ITEM_LOGIN: 'PUT_ITEM_LOGIN',
  POST_ITEM_TAG: 'POST_ITEM_TAG',
  DELETE_ITEM_TAG: 'DELETE_ITEM_TAG',
};

// todo: might not be used anymore if we add a progress bar
export const REQUEST_MESSAGES = {
  IMPORT_ZIP: 'The ZIP is being processed. Please wait a moment.',
};
