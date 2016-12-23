import React, { Component } from 'react';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import '../css/App-header.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.xx = this.xx.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      on: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  xx() {
    if (this.state.on) {
      return (
        <div className="App-header-toogle-menu">
          <AppLanguagueSelector />
        </div>
      );
    } else return null;
  }

  render() {
    return (
      <div className="App-header">
        <button className="xx" onClick={() => { this.setState({ on: !this.state.on }); } }> menu </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.xx()}
        </ReactCSSTransitionGroup>
        <span className="App-header-menu">
          <a href="#" onClick={() => this._onClick('WHO_I_AM')} className="App-header-menu-item"><b>{this.state.languageSet.WHO_I_AM}</b></a>
          <a href="#" onClick={() => this._onClick('EXPERIENCE')} className="App-header-menu-item"><b>{this.state.languageSet.EXPERIENCE}</b></a>
          <a href="#" onClick={() => this._onClick('CONTACT')} className="App-header-menu-item"><b>{this.state.languageSet.CONTACT}</b></a>
        </span>
        <span className="App-header-language">
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