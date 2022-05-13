import { FAILURE_MESSAGES, SUCCESS_MESSAGES } from '../../constants/messages';

export default {
  [FAILURE_MESSAGES.ITEM_NOT_FOUND]: 'An item was not found',
  [FAILURE_MESSAGES.TOO_MANY_DESCENDANTS]:
    'One item has too many descendants for the operation to proceed',
  [FAILURE_MESSAGES.USER_CANNOT_READ_ITEM]: 'You cannot read this item',
  [FAILURE_MESSAGES.USER_CANNOT_WRITE_ITEM]: 'You cannot write this item',
  [FAILURE_MESSAGES.USER_CANNOT_ADMIN_ITEM]: 'You cannot admin this item',
  [FAILURE_MESSAGES.INVALID_MEMBERSHIP]:
    "You cannot give a lowest permission than the parent item's",
  [FAILURE_MESSAGES.ITEM_MEMBERSHIP_NOT_FOUND]:
    'No permission found for this user for this item',
  [FAILURE_MESSAGES.MODIFY_EXISTING]:
    'A permission for this user for this item already exists. Modify the existing one instead',
  [FAILURE_MESSAGES.INVALID_PERMISSION_LEVEL]:
    'The parent item allows a higher permission level than the submitted one',
  [FAILURE_MESSAGES.HIERARCHY_TOO_DEEP]:
    'An error occurred because the hierarchy is too deep',
  [FAILURE_MESSAGES.TOO_MANY_CHILDREN]:
    'One item has too many children for the operation to proceed',
  [FAILURE_MESSAGES.INVALID_MOVE_TARGET]:
    'You cannot move items to the item you selected',
  [FAILURE_MESSAGES.MEMBER_NOT_FOUND]: 'A user was not found',
  [FAILURE_MESSAGES.CANNOT_MODIFY_OTHER_MEMBERS]:
    'You cannot modify another user',
  [FAILURE_MESSAGES.TOO_MANY_MEMBERSHIP]:
    'One item has too many memberships for the operation to proceed',
  [FAILURE_MESSAGES.MEMBER_CANNOT_ACCESS]:
    'A user does not have access to an item',
  [FAILURE_MESSAGES.MEMBER_ALREADY_SIGNED_UP]:
    'You already has an account, we will send you an email to login',
  [FAILURE_MESSAGES.MEMBER_WITHOUT_PASSWORD]:
    'This account has no password configured',
  [FAILURE_MESSAGES.INCORRECT_PASSWORD]:
    'The submitted password is incorrect for this account',
  [FAILURE_MESSAGES.TOKEN_EXPIRED]: 'Your session token has expired',
  [FAILURE_MESSAGES.INVALID_TOKEN]: 'Your session token is invalid',
  [FAILURE_MESSAGES.INVALID_SESSION]: 'Your session is invalid',
  [FAILURE_MESSAGES.ORPHAN_SESSION]:
    'Your session has no corresponding account',
  [FAILURE_MESSAGES.DATABASE_ERROR]:
    'An unexpected error occurred at the database level',
  [FAILURE_MESSAGES.UNEXPECTED_ERROR]: 'An unexpected error occurred',

  [FAILURE_MESSAGES.STORAGE_EXCEEDED]: 'You exceeded your allowed file storage',
  [FAILURE_MESSAGES.FILE_SIZE_NOT_FOUND]:
    'The file size could not be calculated',
  [FAILURE_MESSAGES.FILE_IS_NOT_IMAGE]: 'The file is not an image',

  [FAILURE_MESSAGES.INVALID_UPLOAD_PARAMETERS]:
    'One or many upload parameters are invalid',
  [FAILURE_MESSAGES.INVALID_FILE_PATH_FOR_COPY]: `The submitted file path is invalid for copy`,
  [FAILURE_MESSAGES.INVALID_FILE_PATH_FOR_DELETE]: `The submitted file path is invalid for delete`,
  [FAILURE_MESSAGES.INVALID_FOLDER_PATH_FOR_DELETE]: `The submitted folder path is invalid for delete`,
  [FAILURE_MESSAGES.INVALID_DOWNLOAD_PARAMETERS]:
    'One or many download parameters are invalid',
  [FAILURE_MESSAGES.LOCAL_FILE_NOT_FOUND]: 'The local file is not found',
  [FAILURE_MESSAGES.S3_FILE_NOT_FOUND]: 'The S3 file is not found',

  [SUCCESS_MESSAGES.RESTORE_ITEMS]: 'You successfully restored the item(s)',
  [SUCCESS_MESSAGES.CREATE_ITEM]: 'The item was successfully created',
  [SUCCESS_MESSAGES.DELETE_ITEM]: 'The item was successfully deleted',
  [SUCCESS_MESSAGES.DELETE_ITEMS]: 'The item(s) were successfully deleted',
  [SUCCESS_MESSAGES.MOVE_ITEM]: 'The item was successfully moved',
  [SUCCESS_MESSAGES.MOVE_ITEMS]: 'The items were successfully moved',
  [SUCCESS_MESSAGES.COPY_ITEM]: 'The item(s) were successfully copied',
  [SUCCESS_MESSAGES.COPY_ITEMS]: 'The item(s) were successfully copied',
  [SUCCESS_MESSAGES.EDIT_ITEM]: 'The item was successfully edited',
  [SUCCESS_MESSAGES.SHARE_ITEM]: 'The item(s) were successfully shared',
  [SUCCESS_MESSAGES.UPLOAD_FILES]: 'The file(s) were successfully uploaded',
  [SUCCESS_MESSAGES.SIGN_OUT]: 'You successfully signed out',
  [SUCCESS_MESSAGES.SIGN_IN]:
    'Your information are valid, you will receive an email to login',
  [SUCCESS_MESSAGES.SIGN_IN_WITH_PASSWORD]: 'You successfully signed in',
  [SUCCESS_MESSAGES.SIGN_UP]:
    'You successfully signed up, you will receive an email to login',
  [SUCCESS_MESSAGES.EDIT_MEMBER]: 'The user was updated successfully',
  [SUCCESS_MESSAGES.COPY_MEMBER_ID_TO_CLIPBOARD]:
    'The user ID is successfully copied',
  [SUCCESS_MESSAGES.EDIT_ITEM_MEMBERSHIP]:
    'The item membership was successfully edited',
  [SUCCESS_MESSAGES.DELETE_ITEM_MEMBERSHIP]:
    'The item membership was successfully deleted',
  [SUCCESS_MESSAGES.POST_ITEM_FLAG]: 'The item was successfully flagged',
  [SUCCESS_MESSAGES.COPY_ITEM_LINK_TO_CLIPBOARD]: 'Link is successfully copied',
  [SUCCESS_MESSAGES.RECYCLE_ITEM]:
    'The item was successfully moved to the recycle bin',
  [SUCCESS_MESSAGES.RECYCLE_ITEMS]:
    'The item(s) were successfully moved to the recycle bin',
  [SUCCESS_MESSAGES.UPLOAD_ITEM_THUMBNAIL]:
    'The thumbnail was successfully uploaded',
  [SUCCESS_MESSAGES.UPLOAD_AVATAR]: 'The avatar was successfully uploaded',
  [SUCCESS_MESSAGES.IMPORT_ZIP]: 'The ZIP archive was successfully imported',
};
