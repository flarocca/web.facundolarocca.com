import React, { Component } from 'react';
import stackoverflowIcon from '../images/stackoverflow-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import argentinaIcon from '../images/argentina-icon.png';
import britainIcon from '../images/britain-icon.png';
import '../css/App.css';
import ImageSources from '../constants/ImageSources';
import ARG_TRANSLATION from '../statics/translations/ARG-TRANSLATION';
import ENG_TRANSLATION from '../statics/translations/ENG-TRANSLATION';

class App extends Component {
  constructor(props) {
    super(props);

    this._changeLanguague = this._changeLanguague.bind(this);
    this.state = {
      translation: ARG_TRANSLATION
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a className="App-header-item"><b>{this.state.translation.WHO_I_AM}</b></a>
          <a className="App-header-item"><b>{this.state.translation.EXPERIENCE}</b></a>
          <a className="App-header-item"><b>{this.state.translation.CONTACT}</b></a>
          <span><a href="#" onClick={() => this._changeLanguague('ARG')}><img src={argentinaIcon} className="App-lan-icon" alt="logo" /></a></span>
          <span><a href="#" onClick={() => this._changeLanguague('ENG')}><img src={britainIcon} className="App-lan-icon" alt="logo" /></a></span>
        </div>
        <h2>Facundo La Rocca</h2>
        <p className="App-intro">
          This page is being built.
        </p>
        <div className="App-footer">
          <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={stackoverflowIcon} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={linkedinIcon} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.GITHUB_PROFILE}><img src={githubIcon} className="App-logo" alt="logo" /></a></span>
          <p className="App-footer-text">
            Powered by <k>Facundo La Rocca</k>
          </p>
        </div>
      </div>
    );
  }

  _changeLanguague(languague) {
    switch (languague) {
      case 'ARG':
        this.setState({ translation: ARG_TRANSLATION });
        break;
      case 'ENG':
        this.setState({ translation: ENG_TRANSLATION });
        break;
      default:
        this.setState({ translation: ARG_TRANSLATION });
        break;
    }
  }
}

export default App;
