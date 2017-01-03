import React, { Component } from 'react';
import '../css/App.css';
import '../font-awesome/css/font-awesome.min.css';
// import profilePic from '../images/profile-pic.jpg';
import BackgroundImage from '../images/background.png';
import Facebook from '../images/svg/Facebook'
import GitHub from '../images/svg/GitHub';
import LinkedIn from '../images/svg/LinkedIn';
import StackOverflow from '../images/svg/StackOverflow';
import ImageSources from '../constants/ImageSources';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppBody from './AppBody';
import UpButton from './UpButton';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import { Element } from 'react-scroll';

export default class App extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    };
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
    AppActions.initializeApp();
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });
  }

  render() {
    return (
      <div id="app" className="App column" style={{ color: "dimgray", backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "repeat" }}>
        <Element name="TOP" />
        <div id="main" className="Container column co-medium" style={{ alignSelf: "center", backgroundColor: "transparent" }}>
          <div className="Container row jc-right" style={{ paddingRight: "1%" }}>
            <a className="Container column jc-center" href={ImageSources.FACEBOOK_PROFILE}><Facebook className="icon" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className="icon-med" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className="icon-large" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.GITHUB_PROFILE}><GitHub className="icon" innerColor="dimgray" outerColor="transparent" /></a>
          </div>
          <div style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
            <AppHeader languageSet={this.state.languageSet} theme={this.state.theme} />
            <AppBody languageSet={this.state.languageSet} theme={this.state.theme} />
            <AppFooter languageSet={this.state.languageSet} theme={this.state.theme} />
            <UpButton />
          </div>
        </div>
      </div>
    );
  }
}