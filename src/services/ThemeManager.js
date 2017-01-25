import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';
import DARK_GREEN_THEME from '../constants/themes/DARK_GREEN_THEME';
import DARK_RED_THEME from '../constants/themes/DARK_RED_THEME';
import COLORFUL_THEME from '../constants/themes/COLORFUL_THEME';
import LIGHT_PURPLE_THEME from '../constants/themes/LIGHT_PURPLE_THEME';

class ThemeManager {
    getTheme(theme) {
        switch (theme) {
            case 'DARK_GREEN_THEME':
                return DARK_GREEN_THEME;
            case 'DARK_RED_THEME':
                return DARK_RED_THEME;
            case 'LIGHT_RED_THEME':
                return LIGHT_RED_THEME;
            case 'LIGHT_PURPLE_THEME':
                return LIGHT_PURPLE_THEME;
            case 'LIGHT_BLUE_THEME':
                return LIGHT_BLUE_THEME;
            case 'COLORFUL_THEME':
            default:
                return COLORFUL_THEME;
        }
    }

    getAll() {
        return [LIGHT_BLUE_THEME, LIGHT_RED_THEME];
    }
}

var themeManager = new ThemeManager();

module.exports = themeManager;