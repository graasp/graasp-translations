import { FAILURE_MESSAGES } from '../messages';

export default {
  translations: {
    [FAILURE_MESSAGES.ITEM_NOT_FOUND]: 'An item was not found',
    [FAILURE_MESSAGES.TOO_MANY_DESCENDANTS]:
      'One item has too many descendants for the operation to proceed',
    [FAILURE_MESSAGES.USER_CANNOT_READ_ITEM]: 'You cannot read this item',
    [FAILURE_MESSAGES.USER_CANNOT_WRITE_ITEM]: 'You cannot write this item',
    [FAILURE_MESSAGES.USER_CANNOT_ADMIN_ITEM]: 'You cannot admin this item',
    [FAILURE_MESSAGES.INVALID_MEMBERSHIP]:
      "You cannot give a lowest permission than the parent item's",
    [FAILURE_MESSAGES.ITEM_MEMBERSHIP_NOT_FOUND]:
      'No permission found for this member for this item',
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
    [FAILURE_MESSAGES.DATABASE_ERROR]:
      'An unexpected error occurred at the database level',
    [FAILURE_MESSAGES.UNEXPECTED_ERROR]: 'An unexpected error occurred',
  },
};
