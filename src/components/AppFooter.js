import React, { Component } from 'react';
import '../css/App.css';
import ImageSources from '../constants/ImageSources';

export default class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <span><a href={ImageSources.STACKOVERFLOW_PROFILE}><img src={this.props.imageProvider.getImage('STK')} className="App-logo" alt="logo" /></a></span>
        <span><a href={ImageSources.LINKEDIN_PROFILE}><img src={this.props.imageProvider.getImage('LIN')} className="App-logo" alt="logo" /></a></span>
        <span><a href={ImageSources.GITHUB_PROFILE}><img src={this.props.imageProvider.getImage('GIT')} className="App-logo" alt="logo" /></a></span>
        <p className="App-footer-text">
          Powered by <k>Facundo La Rocca</k>
        </p>
      </div>
    );
  }
}