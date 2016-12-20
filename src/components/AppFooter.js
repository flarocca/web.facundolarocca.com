import React, { Component } from 'react';
import '../css/App-footer.css';
import ImageSources from '../constants/ImageSources';
import ImageProvider from '../services/ImageProvider';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
  }

  render() {
    return (
      <div className="App-footer">
        <br /><br /><br /><br />
        <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this._imageProvider.getImage('STK')} className="App-img" alt="logo" /></a></span>
        <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this._imageProvider.getImage('LIN')} className="App-img" alt="logo" /></a></span>
        <span><a href={ImageSources.GITHUB_PROFILE}><img src={this._imageProvider.getImage('GITW')} className="App-img" alt="logo" /></a></span>
        <p style={{ fontSize: 'larger', fontFamily: '"Courier New", Courier, monospace', color: 'white' }}>Software developer & engineer.</p>
        <span>
          <p className="App-footer-text">Made with <i><a href={ImageSources.REACT} className="App-footer-text">ReactJS.</a></i></p>
          <a href={ImageSources.REACT}><img src={this._imageProvider.getImage('REC')} className="App-logo" alt="logo" /></a>
        </span>
      </div>
    );
  }
}