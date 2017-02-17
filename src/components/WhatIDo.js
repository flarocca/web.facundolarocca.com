import React, { Component } from 'react';
import Cloud from '../images/svg/Cloud';
import Mobile from '../images/svg/Mobile';
import SectionTitle from './common/SectionTitle';

export default class WhatIDo extends Component {
  render() {
    return (
      <div id="whatido" className="Container column jc-center" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitle title={this.props.languageSet.WHAT_I_DO} color={this.props.theme.COLOR_2} id={"WhatIDo"}/>
        <div className="Container row jc-center" style={{ marginTop: "30px" }}>
          <div className="Container column jc-start column-item-x2" id="web" style={{ color: this.props.theme.COLOR_2 }}>
            <Cloud className="image-desc" innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.WEB_APPS}</h2>
            <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
              {this.props.languageSet.WEB_APPS_DESC}
            </p>
          </div>
          <div className="Container column jc-start column-item-x2" id="mobile" style={{ color: this.props.theme.COLOR_2 }}>
            <Mobile className="image-desc" innerColor={this.props.theme.BACKGROUND_COLOR} outerColor={this.props.theme.COLOR_2} />
            <h2 style={{ color: this.props.theme.COLOR_2 }}>{this.props.languageSet.MOBILE_APPS}</h2>
            <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
              {this.props.languageSet.MOBILE_APPS_DESC}
            </p>
          </div>
        </div>
      </div>
    );
  }
}