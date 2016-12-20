import React, { Component } from 'react';
import '../css/App-footer.css';
import ImageSources from '../constants/ImageSources';
import ImageProvider from '../services/ImageProvider';

export default class AppFooter extends Component {
  constructor(props){
    super(props);

    this._imageProvider = new ImageProvider();
  }

  render() {
    return (
      <div className="App-footer">
        <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this._imageProvider.getImage('STK')} className="App-logo" alt="logo" /></a></span>
        <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this._imageProvider.getImage('LIN')} className="App-logo" alt="logo" /></a></span>
        <span><a href={ImageSources.GITHUB_PROFILE}><img src={this._imageProvider.getImage('GIT')} className="App-logo" alt="logo" /></a></span>
        <span><p className="App-footer-text">Powered by <i>Facundo La Rocca</i>.</p></span>
      </div>
    );
  }
}