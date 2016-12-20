import React, { Component } from 'react';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import '../css/App-header.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

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
      <div className="App-header">
        <a href="#" onClick={() => this._onClick('WHO_I_AM')} className="App-header-item"><b>{this.state.languageSet.WHO_I_AM}</b></a>
        <a href="#" onClick={() => this._onClick('EXPERIENCE')} className="App-header-item"><b>{this.state.languageSet.EXPERIENCE}</b></a>
        <a href="#" onClick={() => this._onClick('CONTACT')} className="App-header-item"><b>{this.state.languageSet.CONTACT}</b></a>
        <AppLanguagueSelector />
      </div>
    );
  }

 _onAppSessionChange() {
    this.setState({languageSet: AppStore.getLanguageSet()});
  }

  _onClick(id){
    AppActions.menuSelected(id);
  }
}