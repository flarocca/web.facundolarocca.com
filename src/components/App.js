import React, { Component } from 'react';
import stackoverflowIcon from '../images/stackoverflow-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import '../css/App.css';
import ImageSources from '../constants/ImageSources'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a className="App-header-item"><b>QUIÉN SOY</b></a>
          <a className="App-header-item"><b>MI EXPERIENCIA</b></a>
          <a className="App-header-item"><b>CONTACTO</b></a>
        </div>
        <h2>Facundo La Rocca</h2>
        <p className="App-intro">
          This page is being built.
        </p>
        <div className="App-footer">
          <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={stackoverflowIcon} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={linkedinIcon} className="App-logo" alt="logo" /></a></span>
          <span><a href={ImageSources.GITHUB_PROFILE}><img src={githubIcon} className="App-logo" alt="logo" /></a></span>
        </div>
      </div>
    );
  }
}

export default App;
