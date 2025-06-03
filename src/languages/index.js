import { LANG } from '../../config';
import english from './lang_eng';
import kannada from './lang_kan';
import hindi from './lang_hin';
import I18n from 'react-native-i18n';
I18n.fallbacks = true;
I18n.locale = LANG
I18n.translations = {
  'english': english,
  'hindi': hindi
}
export default I18n.translations;
export function languageSwitcher() {
  switch (LANG) {
    case 'english':
      return english;

    case 'kannada':
      return kannada;

    case 'hindi':
      return hindi;

    default:
      return english;
  }
}

// import { LANG } from '../../config';
// import english from './lang_eng';
// import kannada from './lang_kan';
// import hindi from './lang_hin';
// import I18n from 'react-native-i18n';
// I18n.fallbacks = true;
// I18n.locale = LANG
// I18n.translations = {
//   'english': english,
//   'hindi': hindi
// }
// export default I18n.translations;
// export function languageSwitcher() {
//   switch (LANG) {
//     case 'english':
//       return english;

//     case 'kannada':
//       return kannada;

//     case 'hindi':
//       return hindi;
//   }
// }
