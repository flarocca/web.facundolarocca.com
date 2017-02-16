import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import '../css/App.css';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._fixHeader = this._fixHeader.bind(this);
    this.state = {
      headerClass: 'hdr',
      itemClass: 'column column-item-x4 hr-menu-item',
      linkClass: 'link-btn-menu',
      iconClass: 'icon-btn-menu',
      btnClass: 'text-btn'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this._fixHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._fixHeader, false);
  }

  _fixHeader(event) {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    if (top >= 620) {
      this.setState({
        headerClass: 'hdr-fix',
        itemClass: 'column column-item-x4 hr-menu-item-fix',
        linkClass: 'link-btn-menu-fixed',
        iconClass: 'icon-btn-menu-fixed',
        btnClass: 'text-btn-fixed'
      });
    } else {
      this.setState({
        headerClass: 'hdr',
        itemClass: 'column column-item-x4 hr-menu-item',
        linkClass: 'link-btn-menu',
        iconClass: 'icon-btn-menu',
        btnClass: 'text-btn'
      });
    }
  }

  render() {
    return (
      <div id="header">
        <div className="pre-hdr row" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
          <div className="profile-pic" />
          <div className="tagline column jc-left" style={{ textAlign: "left" }}>
            <h1 id="my" >Facundo La Rocca</h1>
            <span style={{ fontSize: "25px", fontFamily: "'Open Sans', Helvetica, sans-serif" }}>
              <i className="fa fa-quote-left fa-1x fa-pull-left" aria-hidden="false" />
              <em>{this.props.languageSet.PHRASE}</em><br />
              <i className="fa fa-quote-right fa-1x fa-pull-right" aria-hidden="false" />
            </span>
          </div>
        </div>
        <div className="Container row jc-left" style={{ marginBottom: "5%", backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
          <span className="Container column jc-center" style={{ alignText: "center", color: "white", backgroundColor: this.props.theme.COLOR_1, width: "110px", height: "35px" }}>
            <span style={{ color: "white" }}>{this.props.languageSet.DEVELOPER}</span>
          </span>
        </div>
        <div id="Header" className="Container row hdr">
          <div className={this.state.headerClass}>
            <span className={this.state.itemClass} style={{ backgroundColor: this.props.theme.COLOR_1 }}>
              <a href="#" onClick={() => this._onClick('WHO_I_AM')} className={this.state.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-user fa-4x"></i></div>
                <div className={this.state.btnClass} id="text-user"><b>{this.props.languageSet.WHO_I_AM}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.props.theme.COLOR_2 }}>
              <a href="#" onClick={() => this._onClick('WHAT_I_DO')} className={this.state.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass} id="icon-folder"><i className="fa fa-folder-open fa-4x"></i></div>
                <div className={this.state.btnClass} id="text-folder"><b>{this.props.languageSet.WHAT_I_DO}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.props.theme.COLOR_3 }}>
              <a href="#" onClick={() => this._onClick('RESUME')} className={this.state.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-file-text fa-4x"></i></div>
                <div className={this.state.btnClass}><b>{this.props.languageSet.RESUME}</b></div>
              </a>
            </span>
            <span className={this.state.itemClass} style={{ backgroundColor: this.props.theme.COLOR_4 }}>
              <a href="#" onClick={() => this._onClick('CONTACT')} className={this.state.linkClass} style={{ color: this.props.theme.BACKGROUND_COLOR }}>
                <div className={this.state.iconClass}><i className="fa fa-envelope fa-4x"></i></div>
                <div className={this.state.btnClass}><b>{this.props.languageSet.CONTACT}</b></div>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  _onClick(id) {
    AppActions.menuSelected(id);
  }
}