import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import ImageProvider from '../services/ImageProvider';
import '../css/App-language-selector.css';

export default class AppLanguagueSelector extends Component {
  constructor(props) {
    super(props);

    this._changeLanguage = this._changeLanguage.bind(this);
    this._imageProvider = new ImageProvider();

    this.state = {
      argSelectedClass: 'App-header-lan-selec',
      engSelectedClass: 'App-header-lan'
    }
  }

  render() {
    return (
      <span>
        <span><a className={this.state.argSelectedClass} href="#" onClick={() => this._changeLanguage('ARG')}><b>ARG</b></a></span>
        <span><a className={this.state.engSelectedClass} href="#" onClick={() => this._changeLanguage('ENG')}><b>ENG</b></a></span>
      </span>
    );
  }

  _changeLanguage(language) {
    if (language === 'ENG') {
      this.setState({ engSelectedClass: 'App-header-lan-selec' });
      this.setState({ argSelectedClass: 'App-header-lan' });
    } else {
      this.setState({ argSelectedClass: 'App-header-lan-selec' });
      this.setState({ engSelectedClass: 'App-header-lan' });
    }
    AppActions.languageChanged(language);
  }
}