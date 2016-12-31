import React, { Component } from 'react';
import '../css/App.css';
import '../font-awesome/css/font-awesome.min.css';
import profilePic from '../images/profile-pic.jpg';
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
import ThemeSelector from './ThemeSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import { Element } from 'react-scroll';

export default class App extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: AppStore.getLanguageSet()
    };
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
    AppActions.initializeApp();
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
  }

  render() {
    return (
      <div className="App column" style={{ color:"dimgray", backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "repeat" }}>
       <ThemeSelector/>
        <Element name="TOP" />
        <div className="Container column co-medium" style={{ alignSelf: "center" }}>
          <div className="Container row jc-right" style={{ paddingRight: "1%" }}>
            <a className="Container column jc-center" href={ImageSources.FACEBOOK_PROFILE}><Facebook className="icon" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className="icon-med" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className="icon-large" innerColor="dimgray" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.GITHUB_PROFILE}><GitHub className="icon" innerColor="dimgray" outerColor="transparent" /></a>
          </div>
          <div style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}>
            <div className="pre-hdr row">
              <div className="profile-pic">
                <img src={profilePic} height="180" width="180" alt="Profile" style={{ borderRadius: "90px" }} />
              </div>
              <div className="tagline column jc-left" style={{ textAlign: "left" }}>
                <h1 style={{ fontSize: "60px" }}>Facundo La Rocca</h1>
                <span style={{ fontSize: "25px", fontFamily: "'Open Sans', Helvetica, sans-serif" }}>
                  <i className="fa fa-quote-left fa-1x fa-pull-left" aria-hidden="false"></i>
                  <em>Going forward, one line at a time.</em><br />
                  <i className="fa fa-quote-right fa-1x fa-pull-right" aria-hidden="false"></i>
                </span>
              </div>
            </div>
            <div className="Container row jc-left" style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}>
              <span className="Container column jc-center" style={{ alignText: "center", color: "white", backgroundColor: "rgba(76, 165, 208, 1)", marginBottom: "5%", width: "100px", height: "35px" }}>
                <span style={{ color: "white" }}>Developer</span>
              </span>
            </div>
            <AppHeader languageSet={this.state.languageSet} />
            <AppBody languageSet={this.state.languageSet} />
            <AppFooter languageSet={this.state.languageSet} />
            <UpButton />
          </div>
        </div>
      </div>
    );
  }
}