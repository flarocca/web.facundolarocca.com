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
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);
  }

  _onAppSessionChange() {
    this.setState({ languageSet: AppStore.getLanguageSet() });
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
      <div className="Container column jc-center">
        <Element name="WHAT_I_DO" />
        <div>
          <h1 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.WHAT_I_DO}</h1>
          <hr />
        </div>
        <div className="Container row jc-center detail-list">
          <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
            <Cloud className="image-desc" innerColor="rgba(245, 245, 245, 1)" outerColor="rgba(76, 165, 208, 1)" />
            <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: "dimgray" }}>
              Development of dynamic and versatile <br />
              web solutions to generate the value <br />
              your business needs
            </p>
          </div>
          <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
            <Mobile className="image-desc" innerColor="rgba(245, 245, 245, 1)" outerColor="rgba(76, 165, 208, 1)" />
            <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: "dimgray" }}>
              Development of mobile solutions<br />
              for mobile phones and tablets
            </p>
          </div>
        </div>
        <div className="Container row jc-center" style={{ height: "25%"}}>
          <div className="nav-bar" style={{ width: "30%"}}>
            <span className="column column-item-x5 nav-bar-item "><VisualStudio innerColor="dimgray" outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><ElasticSearch innerColor="dimgray" outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><NodeJS innerColor="dimgray" outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><ReactImg innerColor="dimgray" outerColor="transparent" /></span>
            <span className="column column-item-x5 nav-bar-item "><VisualStudio innerColor="dimgray" outerColor="transparent" /></span>
          </div>
        </div>
      </div>
    );
  }
}