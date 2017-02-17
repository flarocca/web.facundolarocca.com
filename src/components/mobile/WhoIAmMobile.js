import React, { Component } from 'react';
import SectionTitleMobile from '../common/SectionTitleMobile';

export default class WhoIAmMobile extends Component {
  render() {
    return (
      <div id="whoiam-mobile" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitleMobile color={this.props.theme.COLOR_1} id={"WhoIAm"} title={this.props.languageSet.WHO_I_AM} />
        <div className="Container column jc-center">
          <p className="text" style={{ textAlign: "justify", color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.MY_DESCRIPTION}
          </p>
          <span className="column" style={{ textAlign: "right" }}><em style={{ fontSize: "15px" }}>Facundo La Rocca.</em></span>
        </div>
      </div>
    );
  }
}