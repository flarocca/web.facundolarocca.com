import STACKOVERFLOW_ICON from '../images/stackoverflow-icon.png';
import LINKEDIN_ICON from '../images/linkedin-icon.png';
import GITHUB_ICON from '../images/github-icon.png';
import GITHUB_WHITE_ICON from '../images/github-white-icon.png';
import ARGENTINA_ICON from '../images/argentina-icon.png';
import BRITAIN_ICON from '../images/britain-icon.png';
import REACT from '../images/react-logo.svg';
import UP_WHITE from '../images/up-gray-icon.png';

export default class ImageProvider {
    getImage(languague) {
        switch (languague) {
            case 'LIN':
                return LINKEDIN_ICON;
            case 'STK':
                return STACKOVERFLOW_ICON;
            case 'GIT':
                return GITHUB_ICON;
            case 'GITW':
                return GITHUB_WHITE_ICON;
            case 'ARG':
                return ARGENTINA_ICON;
            case 'ENG':
                return BRITAIN_ICON;
            case 'REC':
                return REACT;
            case 'UPW':
                return UP_WHITE;
            default:
                return null;
        }
    }
}