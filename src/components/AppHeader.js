import React, { Component } from 'react';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppStore from '../stores/AppStore';
import '../css/App-header.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  render() {
    return (
      <div className="App-header">
        <a href="#whoiam" className="App-header-item"><b>{this.state.languageSet.WHO_I_AM}</b></a>
        <a href="#experience" className="App-header-item"><b>{this.state.languageSet.EXPERIENCE}</b></a>
        <a href="#contact" className="App-header-item"><b>{this.state.languageSet.CONTACT}</b></a>
        <AppLanguagueSelector />
      </div>
    );
  }

 _onAppSessionChange() {
    this.setState({languageSet: AppStore.getLanguageSet()});
  }
}