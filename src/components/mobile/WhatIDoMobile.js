import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import Cloud from '../../images/svg/Cloud';
import Mobile from '../../images/svg/Mobile';

export default class WhatIDoMobile extends Component {
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
  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet(),
      theme: AppStore.getThemeSelected()
    });

    var menu = AppStore.getMenuSelected();
    if (menu === 'WHAT_I_DO') {
      scroller.scrollTo(menu, {
        duration: 3500,
        delay: 0,
        smooth: true,
        offset: -50
      });
    }
  }

  render() {
    return (
      <div id="whatido-mobile" className="Container column jc-center" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="WHAT_I_DO" />
        <span style={{ textAlign: "left", fontSize: "20px", color: this.state.theme.COLOR_2 }}>
          <b id="WhatIDo-title-mobile">{this.state.languageSet.WHAT_I_DO}</b>
        </span>
        <hr />
        <div className="Container column">
          <div className="Container column" style={{ textAlign: "left" }}>
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.WEB_APPS}</h2>
          </div>
          <div className="Container row" style={{ color: this.state.theme.COLOR_2 }}>
            <div style={{ display: "inline-block", height: "100%", verticalAlign: "middle", flex: "1", marginRight: "5px" }}>
              <Cloud style={{ verticalAlign: "middle" }} className="image-desc-mobile" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            </div>
            <div style={{ display: "block", flex: "4", textAlign: "left" }}>
              <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
                {this.state.languageSet.WEB_APPS_DESC}
              </p>
            </div>
          </div>
        </div>
        <div className="Container column">
          <div className="Container column" style={{ textAlign: "left" }}>
            <h2 style={{ color: this.state.theme.COLOR_2 }}>{this.state.languageSet.MOBILE_APPS}</h2>
          </div>
          <div className="Container row" style={{ color: this.state.theme.COLOR_2 }}>
            <div style={{ display: "inline-block", flex: "1", marginRight: "5px" }}>
              <Mobile className="image-desc-mobile" innerColor={this.state.theme.BACKGROUND_COLOR} outerColor={this.state.theme.COLOR_2} />
            </div>
            <div style={{ display: "block", flex: "4", textAlign: "left" }}>
              <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
                {this.state.languageSet.MOBILE_APPS_DESC}
              </p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}