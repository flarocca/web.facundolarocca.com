import React, { Component } from 'react';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import '../css/App-header.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  render() {
    return (
      <div className="Header">
        <span className="Menu">
          <a href="#" onClick={() => this._onClick('WHO_I_AM')} className="Menu-item"><b className="text">{this.state.languageSet.WHO_I_AM}</b></a>
          <a href="#" onClick={() => this._onClick('EXPERIENCE')} className="Menu-item"><b>{this.state.languageSet.EXPERIENCE}</b></a>
          <a href="#" onClick={() => this._onClick('CONTACT')} className="Menu-item"><b>{this.state.languageSet.CONTACT}</b></a>
        </span>
        <span className="Language">
          <AppLanguagueSelector />
        </span>
      </div>
    );
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}