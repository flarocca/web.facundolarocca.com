import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import profilePic from '../images/profile-pic.jpg';
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
      theme: this.props.theme,
      headerClass: 'hdr',
      itemClass: 'column column-item-x4 hr-menu-item',
      linkClass: 'link-btn-menu',
      iconClass: 'icon-btn-menu'
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);

    window.addEventListener('scroll', this._fixHeader);
  }

  _fixHeader(event) {
    if (event.srcElement.body.scrollTop >= 620) {
      this.setState({
        headerClass: 'hdr-fix',
        itemClass: 'column column-item-x4 hr-menu-item-fix',
        linkClass: 'link-btn-menu-fixed',
        iconClass: 'icon-btn-menu-fixed'
      });
    } else {
      this.setState({
        headerClass: 'hdr',
        itemClass: 'column column-item-x4 hr-menu-item',
        linkClass: 'link-btn-menu',
        iconClass: 'icon-btn-menu'
      });
    }
  }

  render() {
    return (
      <div id="header">
        <div className="pre-hdr row" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
          <div className="profile-pic">
            <img src={profilePic} height="180" width="180" alt="Profile" style={{ borderRadius: "90px" }} />
          </div>
          <div className="tagline column jc-left" style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "60px" }}>Facundo La Rocca</h1>
            <span style={{ fontSize: "25px", fontFamily: "'Open Sans', Helvetica, sans-serif" }}>
              <i className="fa fa-quote-left fa-1x fa-pull-left" aria-hidden="false"></i>
              <em>Going forward, one line at a time.</em><br />
              <i className="fa fa-quote-right fa-1x fa-pull-right" aria-hidden="false"></i>
            </span>
          </div>
        </div>
        <div className="Container row jc-left" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
          <span className="Container column jc-center" style={{ alignText: "center", color: "white", backgroundColor: this.state.theme.COLOR_1, marginBottom: "5%", width: "110px", height: "35px" }}>
            <span style={{ color: "white" }}>{this.state.languageSet.DEVELOPER}</span>
          </span>
        </div>
        <div id="Header" className="Container row hdr">
          <div className={this.state.headerClass}>
            <span className={this.state.itemClass} style={{ backgroundColor: this.state.theme.COLOR_1 }}>
              <a href="#" onClick={() => this._onClick('WHO_I_AM')} className={this.state.linkClass} style={{ color: this.state.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-user fa-4x"></i></div>
                <div className="text-btn" id="text-user"><b>{this.state.languageSet.WHO_I_AM}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.state.theme.COLOR_2 }}>
              <a href="#" onClick={() => this._onClick('WHAT_I_DO')} className={this.state.linkClass} style={{ color: this.state.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass} id="icon-folder"><i className="fa fa-folder-open fa-4x"></i></div>
                <div className="text-btn" id="text-folder"><b>{this.state.languageSet.WHAT_I_DO}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.state.theme.COLOR_3 }}>
              <a href="#" onClick={() => this._onClick('RESUME')} className={this.state.linkClass} style={{ color: this.state.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-file-text fa-4x"></i></div>
                <div className="text-btn"><b>{this.state.languageSet.RESUME}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.state.theme.COLOR_4 }}>
              <a href="#" onClick={() => this._onClick('CONTACT')} className={this.state.linkClass} style={{ color: this.state.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-envelope fa-4x"></i></div>
                <div className="text-btn"><b>{this.state.languageSet.CONTACT}</b></div>
              </a></span>
          </div>
        </div>
      </div>
    );
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}