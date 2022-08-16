// error messages, used in error classes
export const FAILURE_MESSAGES = {
  DEFAULT_FAILURE: 'DEFAULT_FAILURE',
  // graasp core
  ITEM_NOT_FOUND: 'ITEM_NOT_FOUND',
  TOO_MANY_DESCENDANTS: 'TOO_MANY_DESCENDANTS',
  USER_CANNOT_READ_ITEM: 'USER_CANNOT_READ_ITEM',
  USER_CANNOT_WRITE_ITEM: 'USER_CANNOT_WRITE_ITEM',
  USER_CANNOT_ADMIN_ITEM: 'USER_CANNOT_ADMIN_ITEM',
  INVALID_MEMBERSHIP: 'INVALID_MEMBERSHIP',
  ITEM_MEMBERSHIP_NOT_FOUND: 'ITEM_MEMBERSHIP_NOT_FOUND',
  MODIFY_EXISTING: 'MODIFY_EXISTING',
  INVALID_PERMISSION_LEVEL: 'INVALID_PERMISSION_LEVEL',
  HIERARCHY_TOO_DEEP: 'HIERARCHY_TOO_DEEP',
  TOO_MANY_CHILDREN: 'TOO_MANY_CHILDREN',
  INVALID_MOVE_TARGET: 'INVALID_MOVE_TARGET',
  MEMBER_NOT_FOUND: 'MEMBER_NOT_FOUND',
  CANNOT_MODIFY_OTHER_MEMBERS: 'CANNOT_MODIFY_OTHER_MEMBERS',
  TOO_MANY_MEMBERSHIP: 'TOO_MANY_MEMBERSHIP',
  MEMBER_CANNOT_ACCESS: 'MEMBER_CANNOT_ACCESS',
  MEMBER_ALREADY_SIGNED_UP: 'MEMBER_ALREADY_SIGNED_UP',
  MEMBER_NOT_SIGNED_UP: 'MEMBER_NOT_SIGNED_UP',
  MEMBER_WITHOUT_PASSWORD: 'MEMBER_WITHOUT_PASSWORD',
  INCORRECT_PASSWORD: 'INCORRECT_PASSWORD',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  INVALID_TOKEN: 'INVALID_TOKEN',
  INVALID_SESSION: 'INVALID_SESSION',
  ORPHAN_SESSION: 'ORPHAN_SESSION',
  DATABASE_ERROR: 'DATABASE_ERROR',
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',

  FILE_IS_NOT_IMAGE: 'FILE_IS_NOT_IMAGE',

  // file upload limiter
  STORAGE_EXCEEDED: 'STORAGE_EXCEEDED',
  FILE_SIZE_NOT_FOUND: 'FILE_SIZE_NOT_FOUND',

  // file upload
  INVALID_UPLOAD_PARAMETERS: 'INVALID_UPLOAD_PARAMETERS',
  UPLOAD_EMPTY_FILE: 'UPLOAD_EMPTY_FILE',
  INVALID_FILE_PATH_FOR_COPY: `INVALID_FILE_PATH_FOR_COPY`,
  INVALID_FILE_PATH_FOR_DELETE: `INVALID_FILE_PATH_FOR_DELETE`,
  INVALID_FOLDER_PATH_FOR_DELETE: `INVALID_FOLDER_PATH_FOR_DELETE`,
  INVALID_DOWNLOAD_PARAMETERS: 'INVALID_DOWNLOAD_PARAMETERS',
  LOCAL_FILE_NOT_FOUND: 'LOCAL_FILE_NOT_FOUND',
  S3_FILE_NOT_FOUND: 'S3_FILE_NOT_FOUND',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  EMPTY_CURRENT_PASSWORD: 'EMPTY_CURRENT_PASSWORD',

  // zip
  INVALID_ARCHIVE_FILE: 'INVALID_ARCHIVE_FILE',
  INVALID_FILE_ITEM: 'INVALID_FILE_ITEM',
  UNEXPECTED_EXPORT_ERROR: 'UNEXPECTED_EXPORT_ERROR',

  // apps
  NOT_APP_ITEM: 'NOT_APP_ITEM',
  INVALID_APP_ORIGIN: 'INVALID_APP_ORIGIN',
  TOKEN_ITEM_ID_MISMATCH: 'TOKEN_ITEM_ID_MISMATCH',
  APP_DATA_NOT_FOUND: 'APP_DATA_NOT_FOUND',
  APP_DATA_NOT_ACCESSIBLE: 'APP_DATA_NOT_ACCESSIBLE',
  APP_ACTION_NOT_ACCESSIBLE: 'APP_ACTION_NOT_ACCESSIBLE',
  APP_SETTING_NOT_FOUND: 'APP_SETTING_NOT_FOUND',
  PREVENT_APP_DATA_FILE_UPDATE: 'PREVENT_APP_DATA_FILE_UPDATE',
  PREVENT_APP_SETTING_FILE_UPDATE: 'PREVENT_APP_SETTING_FILE_UPDATE',
  FILE_SERVICE_NOT_DEFINED: 'FILE_SERVICE_NOT_DEFINED',

  // recycle bin
  CANNOT_COPY_RECYCLED_ITEM: 'CANNOT_COPY_RECYCLED_ITEM',
  CANNOT_MOVE_RECYCLED_ITEM: 'CANNOT_MOVE_RECYCLED_ITEM',
  CANNOT_DELETE_RECYCLED_ITEM: 'CANNOT_DELETE_RECYCLED_ITEM',
  CANNOT_GET_RECYCLED_ITEM: 'CANNOT_GET_RECYCLED_ITEM',
  INVALID_ITEM_STATUS: 'INVALID_ITEM_STATUS',
};

export const DEFAULT_FAILURE_MESSAGE = FAILURE_MESSAGES.UNEXPECTED_ERROR;

// success messages, used for front end feedback
// keys are used since they will always be translated
export const SUCCESS_MESSAGES = {
  DEFAULT_SUCCESS: 'DEFAULT_SUCCESS',
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
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SIGN_IN_WITH_PASSWORD: 'SIGN_IN_WITH_PASSWORD',
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
  IMPORT_H5P: 'IMPORT_H5P',
  POST_ITEM_CATEGORY: 'POST_ITEM_CATEGORY',
  DELETE_ITEM_CATEGORY: 'DELETE_ITEM_CATEGORY',
  PUT_ITEM_LOGIN: 'PUT_ITEM_LOGIN',
  POST_ITEM_TAG: 'POST_ITEM_TAG',
  DELETE_ITEM_TAG: 'DELETE_ITEM_TAG',
  DELETE_MEMBER: 'DELETE_MEMBER',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
};

// todo: might not be used anymore if we add a progress bar
export const REQUEST_MESSAGES = {
  IMPORT_ZIP: 'The ZIP file is being processed. Please wait a moment.',
  IMPORT_H5P: 'The H5P file is being processed. Please wait a moment.',
};
