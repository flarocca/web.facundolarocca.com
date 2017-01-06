import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ImageProvider from '../services/ImageProvider';
import { Link } from 'react-router'

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme,
      checked: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);

    window.addEventListener('scroll', () => {
      if (event.srcElement.body.scrollTop >= 1000) {
        this.setState({ checked: true });
      }
    });
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });

    var menu = AppStore.getMenuSelected();
    if (menu === 'EXPERIENCE') {
      scroller.scrollTo(menu, {
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -50
      });
    }
  }

  render() {
    return (
      <div id="experience" className="Container column" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="EXPERIENCE" />
        <span style={{ fontSize: "40px", color: this.state.theme.COLOR_3 }}>
          <input type="checkbox" id="Experience-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="Experience-title">{this.state.languageSet.EXPERIENCE}</b>
        </span>
        <hr />
        <div className="Container row jc-center">
          <div className="Container column jc-start column-item-x2" id="professional" style={{ color: this.state.theme.COLOR_3 }}>
            <h2 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PROFESSIONAL}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              I Actually work as Fullstack .NET Engineer III for Web.com, <br />
              a company with a strong position in the North American eCommerce market. <br />
              Maintenance and new software requirements both back-end and front-end <br />
              of the ticketing web portal of the company. <br />
            </p>
            <span className="Container column jc-center button" style={{ backgroundColor: this.state.theme.COLOR_3 }}><Link className="link-btn" style={{ color: "white" }} to="/experience/professional">{this.state.languageSet.VIEW_MORE}</Link></span>
          </div>
          <div className="Container column jc-start column-item-x2" id="personal" style={{ color: this.state.theme.COLOR_3 }}>
            <h2 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PERSONAL}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              Web and mobile applications development using <em>NodeJS</em>, <em>ReactJS</em>, <em>ReactNative</em> <br />
              and non-relational databases such as <em>ElasticSearch</em> and <em>MongoDB</em>
            </p>
          </div>
        </div>
      </div>
    );
  }
}