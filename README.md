# Graasp Translations

Repo containing translations for graasp.

## Using translations in your app

To use translations in your app you should:
- Create the translation config by calling `buildI18n('your_app_name')` and eventually changing the language used with
`i18next.changeLanguage(new_language)`.
- Make sure the namespace you want to use exists. If it does not exist you should create it by following the information
in the section bellow

## Adding support for a new app 

In this section we create a new translation namespace that will contain your app's translations.

- Create a file with constant keys in `src/constants/your_app_name.ts` with the following content:
```ts
export const MY_APP_NAME = {
  WELCOME_MESSAGE: 'Hello World',
  // add more keys here ...
};
```

- Create a file for each supported language in `src/langs/language_initials/your_app_name.ts` with the following content:
```ts
import { MY_APP_NAME } from "../../constants/your_app_name";

export default {
    [MY_APP_NAME.WELCOME_MESSAGE]: 'Hello World',
    // other translations here ...
};
```

- Finally, add your translations to the exising `src/langs/index.ts` file.

### Documentation

[i18next Namespaces](https://www.i18next.com/principles/namespaces)
[i18next Namespaces](https://www.i18next.com/principles/namespaces)
