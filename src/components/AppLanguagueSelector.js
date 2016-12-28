import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import ImageProvider from '../services/ImageProvider';

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
      <span style={styles.container}>
        <span><a href="#" onClick={() => this._changeLanguage('ARG')}><img src={this._imageProvider.getImage('ARG')} style={styles.icon} alt="lan-icon" /></a></span>
        <span><a href="#" onClick={() => this._changeLanguage('ENG')}><img src={this._imageProvider.getImage('ENG')} style={styles.icon} alt="lan-icon" /></a></span>
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

var styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    right: "1%"
  },
  icon: {
    height: "20px",
    width: "30px",
    margin: "5px"
  }
}