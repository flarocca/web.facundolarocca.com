import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';
import DARK_GREEN_THEME from '../constants/themes/DARK_GREEN_THEME';

class ThemeManager {
    getTheme(theme) {
        switch (theme) {
            case 'DARK_GREEN_THEME':
                return DARK_GREEN_THEME;
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