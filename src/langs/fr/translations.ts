import { FAILURE_MESSAGES, SUCCESS_MESSAGES } from '../../constants/messages';

export default {
    [FAILURE_MESSAGES.ITEM_NOT_FOUND]: 'Élément introuvable',
    [FAILURE_MESSAGES.TOO_MANY_DESCENDANTS]:
      "Un élément a trop de descendents pour que l'opération continue",
    [FAILURE_MESSAGES.USER_CANNOT_READ_ITEM]:
      'Vous ne pouvez pas voir cet élément',
    [FAILURE_MESSAGES.USER_CANNOT_WRITE_ITEM]:
      'Vous ne pouvez pas modifier cet élément',
    [FAILURE_MESSAGES.USER_CANNOT_ADMIN_ITEM]:
      'Vous ne pouvez pas modifier cet élément',
    [FAILURE_MESSAGES.INVALID_MEMBERSHIP]:
      "Vous ne pouvez pas appliquer une permission plus restrictive que celle définie par l'élément parent",
    [FAILURE_MESSAGES.ITEM_MEMBERSHIP_NOT_FOUND]:
      "Aucune permission n'a été trouvée pour cet utilisateur pour cet élément",
    [FAILURE_MESSAGES.MODIFY_EXISTING]:
      'Une permission a déjà été donnée à cet utilisateur pour cet élément. Modifiez la permission existante.',
    [FAILURE_MESSAGES.INVALID_PERMISSION_LEVEL]:
      "L'élément parent autorise déjà plus que la permission choisie",
    [FAILURE_MESSAGES.HIERARCHY_TOO_DEEP]:
      'Une erreur est survenue cat la hiérarchie est trop étendue',
    [FAILURE_MESSAGES.TOO_MANY_CHILDREN]:
      "Un élément a trop d'enfants pour que l'opération puisse continuer",
    [FAILURE_MESSAGES.INVALID_MOVE_TARGET]:
      "Vous ne pouvez pas déplacer des éléments dans l'élément choisi",
    [FAILURE_MESSAGES.MEMBER_NOT_FOUND]: "Un utilisateur n'a pas été trouvé",
    [FAILURE_MESSAGES.CANNOT_MODIFY_OTHER_MEMBERS]:
      'Vous ne pouvez pas modifier un autre utilisateur',
    [FAILURE_MESSAGES.TOO_MANY_MEMBERSHIP]:
      "Trop d'utilisateurs ont accès à cet élément pour que l'opération puisse continue",
    [FAILURE_MESSAGES.MEMBER_CANNOT_ACCESS]:
      "Un utilisateur n'a pas accès à cet élément",
    [FAILURE_MESSAGES.DATABASE_ERROR]:
      'Une erreur est survenue dans la base de données',
    [FAILURE_MESSAGES.UNEXPECTED_ERROR]: 'Une erreur inattendue est survenue',

    [FAILURE_MESSAGES.STORAGE_EXCEEDED]:
      'Vous avez rempli votre espace de stockage',
    [FAILURE_MESSAGES.FILE_SIZE_NOT_FOUND]:
      'Impossible de calculer la taille du fichier',

    [SUCCESS_MESSAGES.RESTORE_ITEMS]:
      'Les éléments ont été restorés avec succès',
    [SUCCESS_MESSAGES.CREATE_ITEM]: "L'élément a été créé avec succès",
    [SUCCESS_MESSAGES.DELETE_ITEM]: "L'élément a été supprimé avec succès",
    [SUCCESS_MESSAGES.DELETE_ITEMS]:
      'Les éléments ont été supprimés avec succès',
    [SUCCESS_MESSAGES.MOVE_ITEM]: "L'élément a été déplacé avec succès",
    [SUCCESS_MESSAGES.MOVE_ITEMS]: 'Les éléments ont été déplacés avec succès',
    [SUCCESS_MESSAGES.COPY_ITEM]: "L'élément a été copié avec succès",
    [SUCCESS_MESSAGES.COPY_ITEMS]: 'Les éléments ont été copiés avec succès',
    [SUCCESS_MESSAGES.EDIT_ITEM]: "L'élément a été modifié avec succès",
    [SUCCESS_MESSAGES.SHARE_ITEM]: "L'élément a été partagé avec succès",
    [SUCCESS_MESSAGES.UPLOAD_FILES]:
      'Les fichiers ont été sauvegardés avec succès',
    [SUCCESS_MESSAGES.SIGN_OUT]: 'Vous avez été déconnecté avec succès',
    [SUCCESS_MESSAGES.EDIT_MEMBER]: "L'utilisateur a été modifié avec succès",
    [SUCCESS_MESSAGES.COPY_MEMBER_ID_TO_CLIPBOARD]:
      "L'ID utilisateur a été copié avec succès",
    [SUCCESS_MESSAGES.EDIT_ITEM_MEMBERSHIP]:
      'La permission a été modifiée avec succès',
    [SUCCESS_MESSAGES.DELETE_ITEM_MEMBERSHIP]:
      'La permission a été enlevée avec succès',
    [SUCCESS_MESSAGES.POST_ITEM_FLAG]: "L'élément a été reporté avec succès",
    [SUCCESS_MESSAGES.COPY_ITEM_LINK_TO_CLIPBOARD]:
      'Le lien a été copié avec succès',
    [SUCCESS_MESSAGES.RECYCLE_ITEM]:
      "L'élément a été déplacé dans la poubelle avec succès",
    [SUCCESS_MESSAGES.RECYCLE_ITEMS]:
      'Les éléments ont été déplacés dans la poubelle avec succès',
    [SUCCESS_MESSAGES.UPLOAD_ITEM_THUMBNAIL]:
      'La miniature a été sauvegardé avec succès',
    [SUCCESS_MESSAGES.UPLOAD_AVATAR]: "L'avatar a été sauvegardé avec succès",
    [SUCCESS_MESSAGES.IMPORT_ZIP]: "L'archive ZIP a été importé avec succès",
};
