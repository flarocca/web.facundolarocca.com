import React, { Component } from 'react';
import '../css/WhatIDo-section.css';
import AppStore from '../stores/AppStore';
import ImageProvider from '../services/ImageProvider';
import { Element, scroller } from 'react-scroll';
import WEB from '../images/cloud.png';
import MOBILE from '../images/mobile.png';

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
      <div className="Whatido">
        <Element name="WHAT_I_DO" />
        <div className="Whatido-Detail-Title">
          <p className="Section-title">{this.state.languageSet.WHAT_I_DO}</p>
          <hr />
        </div>
        <div className="Whatido-Detail-List">
          <div className="Whatido-Detail-List-Item">
            <img src={WEB} className="Whatido-Detail-List-img" alt="logo" />
            <h2>{this.state.languageSet.WEB_APPS}</h2>
            {this.state.languageSet.WEB_APPS_DESC}
          </div>
          <div className="Whatido-Detail-List-Item">
            <img src={MOBILE} className="Whatido-Detail-List-img" alt="logo" />
            <h2>{this.state.languageSet.MOBILE_APPS}</h2>
            {this.state.languageSet.MOBILE_APPS_DESC}
          </div>
        </div>
      </div>
    );
  }
}