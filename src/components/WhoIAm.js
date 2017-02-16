import React, { Component } from 'react';
import { Element } from 'react-scroll';
import SectionTitle from './common/SectionTitle';

export default class WhoIAm extends Component {
  render() {
    return (
      <div id="whoiam" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="WHO_I_AM" />
        <SectionTitle title={this.props.languageSet.WHO_I_AM} color={this.props.theme.COLOR_1} id={"WhoIAm"}/>
        <hr />
        <div className="Container column jc-center">
          <p className="text" style={{ textAlign: "justify", color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.MY_DESCRIPTION}
          </p>
          <span className="column" style={{ textAlign: "right" }}><em style={{ fontSize: "26px" }}>Facundo La Rocca.</em></span>
        </div>
      </div>
    );
  }
}