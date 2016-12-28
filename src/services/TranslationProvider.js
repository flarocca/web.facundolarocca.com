import ARG_TRANSLATION from '../constants/translations/ARG-TRANSLATION';
import ENG_TRANSLATION from '../constants/translations/ENG-TRANSLATION';

export default class TranslationProvider {
    getTranslation(languague) {
        switch (languague) {
            case 'ARG':
                return ARG_TRANSLATION;
            case 'ENG':
            default:
                return ENG_TRANSLATION;
        }
    }
}