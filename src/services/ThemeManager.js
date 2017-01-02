import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';

class ThemeManager {
    getTheme(theme) {
        switch (theme) {
            case 'LIGHT_RED_THEME':
                return LIGHT_RED_THEME;
            case 'LIGHT_BLUE_THEME':
            default:
                return LIGHT_BLUE_THEME;
        }
    }

    getAll() {
        return [LIGHT_BLUE_THEME, LIGHT_RED_THEME];
    }
}

var themeManager = new ThemeManager();

module.exports = themeManager;