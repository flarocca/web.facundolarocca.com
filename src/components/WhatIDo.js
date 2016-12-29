import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { Element, scroller } from 'react-scroll';
import WEB from '../images/cloud.svg';
import MOBILE from '../images/mobile.svg';

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
      <div className="Container column">
        <Element name="WHAT_I_DO" />
        <div>
          <h1 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.WHAT_I_DO}</h1>
          <hr />
        </div>
        <div className="Container row jc-center detail-list">
          <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
            <img src={WEB} style={styles.image} alt="logo" />
            <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: "dimgray" }}>
              Development of dynamic and versatile <br />
              web solutions to generate the value <br />
              your business needs
            </p>
          </div>
          <div className="detail-list-item" style={{ color: "rgba(76, 165, 208, 1)" }}>
            <img src={MOBILE} style={styles.image} alt="logo" />
            <h2 style={{ color: "rgba(76, 165, 208, 1)" }}>{this.state.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: "dimgray" }}>
              Development of mobile solutions<br />
              for mobile phones and tablets
            </p>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  image: {
    height: "40%",
    width: "40%"
  }
}