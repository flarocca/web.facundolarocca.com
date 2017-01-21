import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Cloud from '../images/svg/Cloud';
import Mobile from '../images/svg/Mobile';

export default class WhatIDo extends Component {
  constructor(props) {
    super(props);

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
      if (event.srcElement.body.scrollTop >= 620) {
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
          <input type="checkbox" id="WhatIDo-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="WhatIDo-title">{this.state.languageSet.WHAT_I_DO}</b>
        </span>
        <hr />
        <div className="Container row jc-center">
          <div className="Container column jc-start column-item-x2" id="web" style={{ color: this.state.theme.COLOR_2 }}>
            <Cloud className="image-desc" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              {this.state.languageSet.WEB_APPS_DESC}
            </p>
          </div>
          <div className="Container column jc-start column-item-x2" id="mobile" style={{ color: this.state.theme.COLOR_2 }}>
            <Mobile className="image-desc" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              {this.state.languageSet.MOBILE_APPS_DESC}
            </p>
          </div>
        </div>
      </div>
    );
  }
}