import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import ImageProvider from '../services/ImageProvider';
import '../css/App-language-selector.css';

export default class AppLanguagueSelector extends Component {
  constructor(props) {
    super(props);

    this._changeLanguage = this._changeLanguage.bind(this);
    this._imageProvider = new ImageProvider();
  }

  render() {
    return (
      <span>
        <span><a href="#" onClick={() => this._changeLanguage('ARG')}><img src={this._imageProvider.getImage('ARG')} className="App-lan-icon" alt="logo" /></a></span>
        <span><a href="#" onClick={() => this._changeLanguage('ENG')}><img src={this._imageProvider.getImage('ENG')} className="App-lan-icon" alt="logo" /></a></span>
      </span>
    );
  }

  _changeLanguage(language) {
    AppActions.languageChanged(language);
  }
}