import React, { Component } from 'react';
import SectionTitleMobile from '../common/SectionTitleMobile';
import ExperienceContainer from '../common/ExperienceContainer';
import SkillsContainer from '../common/SkillsContainer';
import OtherSkillsContainer from '../common/OtherSkillsContainer';

export default class ResumeMobile extends Component {
  render() {
    return (
      <div id="resume-mobile" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <SectionTitleMobile color={this.props.theme.COLOR_3} id={"Resume"} title={this.props.languageSet.RESUME} />
        <div className="Container column jc-center">
          <h2 style={{ alignSelf: "flex-start", color: this.props.theme.COLOR_3 }}>{this.props.languageSet.PROFESSIONAL}</h2>
          <div className="Container column jc-start" style={{ color: this.props.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <ExperienceContainer color={this.props.theme.COLOR_3} fontColor={this.props.theme.FONT_COLOR} languageSet={this.props.languageSet} />
              </div>
            </div>
          </div>
          <h2 style={{ alignSelf: "flex-start", color: this.props.theme.COLOR_3 }}>{this.props.languageSet.SKILLS}</h2>
          <div className="Container column jc-start" style={{ color: this.props.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <SkillsContainer color={this.props.theme.COLOR_3} />
              </div>
            </div>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.OTHER_SKILLS}</h3>
                <OtherSkillsContainer color={this.props.theme.COLOR_3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}