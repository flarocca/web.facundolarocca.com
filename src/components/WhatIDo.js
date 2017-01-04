import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { Element, scroller } from 'react-scroll';

import VisualStudio from '../images/svg/VisualStudio';
import ElasticSearch from '../images/svg/ElasticSearch';
import NodeJS from '../images/svg/NodeJS';
import ReactImg from '../images/svg/ReactImg';
import Cloud from '../images/svg/Cloud';
import Mobile from '../images/svg/Mobile';

export default class WhatIDo extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._imageProvider = new ImageProvider();
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme,
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });

    var menu = AppStore.getMenuSelected();
    if (menu === 'WHAT_I_DO') {
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
      <div id="whatido" className="Container column jc-center" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="WHAT_I_DO" />
        <span style={{ textAlign: "left", fontSize: "40px", color: this.state.theme.COLOR_2 }}>
          <b>{this.state.languageSet.WHAT_I_DO}</b>
        </span>
        <hr />
        <div className="Container row jc-center">
          <div id="web" style={{ color: this.state.theme.COLOR_2 }}>
            <Cloud className="image-desc" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              Development of dynamic and versatile <br />
              web solutions to generate the value <br />
              your business needs
            </p>
          </div>
          <div id="mobile" style={{ color: this.state.theme.COLOR_2 }}>
            <Mobile className="image-desc" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              Development of mobile solutions<br />
              for mobile phones and tablets
            </p>
          </div>
        </div>
        <div id="tools" className="Container row jc-center">
          <div id="nav-bar" className="nav-bar">
            <span className="column column-item-x5 nav-bar-item "><VisualStudio innerColor={this.state.theme.FONT_COLOR} outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><ElasticSearch innerColor={this.state.theme.FONT_COLOR} outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><NodeJS innerColor={this.state.theme.FONT_COLOR} outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><ReactImg innerColor={this.state.theme.FONT_COLOR} outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><VisualStudio innerColor={this.state.theme.FONT_COLOR} outerColor="transparent" /></span>
          </div>
        </div>
      </div>
    );
  }
}