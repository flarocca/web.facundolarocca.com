import React, { Component } from 'react';
import '../css/App.css';
import profilePic from '../images/profile-pic.jpg';
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
      <div className="App" style={{ backgroundColor: "rgba(60, 60, 60, 1)" }}>
        <Element name="TOP" />
        <div className="Container column co-medium" style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}>
          <div className="Container row jc-right" style={{ paddingRight:"1%", backgroundColor: "rgba(60, 60, 60, 1)" }}>
            <a className="Container column jc-center" href={ImageSources.FACEBOOK_PROFILE}><Facebook className="icon" innerColor="white" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.STACKOVERFLOW_PROFILE}><StackOverflow className="icon-med" innerColor="white" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.LINKEDIN_PROFILE}><LinkedIn className="icon-large" innerColor="white" outerColor="transparent" /></a>
            <a className="Container column jc-center" href={ImageSources.GITHUB_PROFILE}><GitHub className="icon" innerColor="white" outerColor="rgba(60, 60, 60, 1)" /></a>
          </div>
          <div className="pre-hdr row">
            <div className="profile-pic">
              <img src={profilePic} height="180" width="180" alt="Profile picture." style={{ borderRadius: "90px" }} />
            </div>
            <div className="tagline column">
              <h1>Facundo La Rocca</h1>
              <h3><em>As better you think, as better you are...</em></h3>
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
    );
  }
}