import LIGHT_BLUE_THEME from '../constants/themes/ARG-LIGHT_BLUE_THEME';

export default class ThemeManager {
    getTranslation(theme) {
        switch (theme) {
            case 'LIGHT_BLUE_THEME':
            default:
                return LIGHT_BLUE_THEME;
        }
    }
}