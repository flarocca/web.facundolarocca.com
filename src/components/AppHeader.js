import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppLanguagueSelector from './AppLanguagueSelector';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/App.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._fixHeader = this._fixHeader.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      headerClass: 'hdr'
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);

    window.addEventListener('scroll', this._fixHeader);
  }

  _fixHeader(event) {
    if (event.srcElement.body.scrollTop >= 580) {
      this.setState({ headerClass: 'hdr-fix' });
    } else {
      this.setState({ headerClass: 'hdr' });
    }
  }

  render() {
    return (
      <div id="Header" className="Container row hdr">
        <div className={this.state.headerClass}>
          <span className="column column-item-x4 hr-menu-item " style={{ backgroundColor: "rgba(76, 165, 208, 1)" }}><a href="#" onClick={() => this._onClick('WHO_I_AM')} className="link-btn" style={{ color: "white" }}><b>{this.state.languageSet.WHO_I_AM}</b></a></span>
          <span className="column column-item-x4 hr-menu-item " style={{ backgroundColor: "rgba(76, 165, 208, 1)" }}><a href="#" onClick={() => this._onClick('WHAT_I_DO')} className="link-btn" style={{ color: "white" }}><b>{this.state.languageSet.WHAT_I_DO}</b></a></span>
          <span className="column column-item-x4 hr-menu-item " style={{ backgroundColor: "rgba(76, 165, 208, 1)" }}><a href="#" onClick={() => this._onClick('EXPERIENCE')} className="link-btn" style={{ color: "white" }}><b>{this.state.languageSet.EXPERIENCE}</b></a></span>
          <span className="column column-item-x4 hr-menu-item " style={{ backgroundColor: "rgba(76, 165, 208, 1)" }}><a href="#" onClick={() => this._onClick('CONTACT')} className="link-btn" style={{ color: "white" }}><b>{this.state.languageSet.CONTACT}</b></a></span>
        </div>
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