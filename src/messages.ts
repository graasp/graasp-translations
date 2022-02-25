// Object containing messages for error messages
export const FAILURE_MESSAGES = {
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
};

export const DEFAULT_FAILURE_MESSAGE = FAILURE_MESSAGES.UNEXPECTED_ERROR;

export const SUCCESS_MESSAGES = {
  RESTORE_ITEMS: 'You successfully restore the item(s).',
  CREATE_ITEM: 'The item was successfully created.',
  DELETE_ITEMS_SUCCESS_MESSAGE: 'The item(s) were successfully deleted.',
  MOVE_ITEM_SUCCESS_MESSAGE: 'The item was successfully moved.',
  MOVE_ITEMS_SUCCESS_MESSAGE: 'The items were successfully moved.',
  COPY_ITEM_SUCCESS_MESSAGE: 'The item(s) were successfully copied.',
  COPY_ITEMS_SUCCESS_MESSAGE: 'The item(s) were successfully copied.',
  EDIT_ITEM_SUCCESS_MESSAGE: 'The item(s) were successfully edited.',
  SHARE_ITEM_SUCCESS_MESSAGE: 'The item(s) were successfully shared.',
  UPLOAD_FILES_SUCCESS_MESSAGE: 'The file(s) were successfully uploaded.',
  UPLOAD_FILES_PROGRESS_MESSAGE:
    'The file(s) are in queue for uploading. Please wait a moment.',
  SIGN_OUT_SUCCESS_MESSAGE: 'You successfully signed out.',
  EDIT_MEMBER_SUCCESS_MESSAGE: 'The member was updated successfully',
  COPY_MEMBER_ID_TO_CLIPBOARD_SUCCESS_MESSAGE:
    'Member ID is successfully copied!',
  EDIT_ITEM_MEMBERSHIP_SUCCESS_MESSAGE:
    'The item membership was successfully edited.',
  DELETE_ITEM_MEMBERSHIP_SUCCESS_MESSAGE:
    'The item membership was successfully deleted.',
  POST_ITEM_FLAG_SUCCESS_MESSAGE: 'The item was successfully flagged',
  COPY_ITEM_LINK_TO_CLIPBOARD_SUCCESS_MESSAGE: 'Link is successfully copied!',
  RECYCLE_ITEMS_SUCCESS_MESSAGE:
    'The item(s) were successfully moved to the recycle bin.',
  UPLOAD_ITEM_THUMBNAIL_SUCCESS_MESSAGE:
    'The thumbnail was successfully uploaded.',
  UPLOAD_ITEM_THUMBNAIL_FAILURE_MESSAGE:
    'An error occurred while uploading the thumbnail.',
  UPLOAD_AVATAR_SUCCESS_MESSAGE: 'The avatar was successfully uploaded.',
  UPLOAD_AVATAR_FAILURE_MESSAGE:
    'An error occurred while uploading the avatar.',
  IMPORT_ZIP_SUCCESS_MESSAGE: 'The ZIP archive was successfully imported.',
  IMPORT_ZIP_FAILURE_MESSAGE:
    'An error occurred while importing The ZIP archive.',
  IMPORT_ZIP_PROGRESS_MESSAGE:
    'The ZIP is being processed. Please wait a moment.',
};
