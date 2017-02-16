import React, { Component } from 'react';
import { Element } from 'react-scroll';
import ResumeExperience from './ResumeExperience';
import ResumeSkill from './ResumeSkill';
import ResumeOtherSkill from './ResumeOtherSkill';
import SectionTitle from './common/SectionTitle';

export default class Resume extends Component {
  render() {
    return (
      <div id="resume" className="Container column" style={{ marginTop: "50px", backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="RESUME" />
        <SectionTitle title={this.props.languageSet.RESUME} color={this.props.theme.COLOR_3} id={"Resume"}/>
        <hr />
        <div className="Container row jc-center" style={{ marginTop: "30px" }}>
          <div className="Container column jc-start column-item-x2" id="professional" style={{ color: this.props.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left", width: "100%" }}>
                <h2 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.PROFESSIONAL}</h2>
                <ResumeExperience
                  backgroundColor={this.props.theme.COLOR_3}
                  fontColor={this.props.theme.FONT_COLOR}
                  title={'Web.com'}
                  description={this.props.languageSet.WEB_DOT_COM}
                  period={this.props.languageSet.NOV + " 2016 - " + this.props.languageSet.PRESENT} />
                <ResumeExperience
                  backgroundColor={this.props.theme.COLOR_3}
                  fontColor={this.props.theme.FONT_COLOR}
                  title={'Isban'}
                  description={this.props.languageSet.ISBAN}
                  period={this.props.languageSet.FEB + " 2015 - " + this.props.languageSet.NOV + " 2016"} />
                <ResumeExperience
                  backgroundColor={this.props.theme.COLOR_3}
                  fontColor={this.props.theme.FONT_COLOR}
                  title={'Andreani'}
                  description={this.props.languageSet.ANDREANI}
                  period={this.props.languageSet.OCT + " 2012 - " + this.props.languageSet.FEB + " 2015"} />
                <ResumeExperience
                  backgroundColor={this.props.theme.COLOR_3}
                  fontColor={this.props.theme.FONT_COLOR}
                  title={'Open Solutions'}
                  description={this.props.languageSet.OPEN_SOLUTIONS}
                  period={this.props.languageSet.NOV + " 2008 - " + this.props.languageSet.SEP + " 2012"} />
              </div>
            </div>
          </div>
          <div className="Container column jc-start column-item-x2" id="personal" style={{ color: this.props.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <h2 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.SKILLS}</h2>
                <div className="Container column">
                  <ResumeSkill color={this.props.theme.COLOR_3} points={9} text={"C#"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={7} text={"JavaScript"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={6} text={"ReactJS / React-Native"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={6} text={"NodeJS"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={8} text={"CSS / HTML"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={7} text={"SQL Server"} />
                  <ResumeSkill color={this.props.theme.COLOR_3} points={7} text={"ORACLE"} />
                </div>
              </div>
            </div>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left", width: "100%" }}>
                <h3 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.OTHER_SKILLS}</h3>
                <div className="Container row" style={{ marginLeft: "15px", flexWrap: "wrap" }}>
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"TDD"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"Scrum"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"MongoDB"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"ElasticSearch"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"Flux"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={".Net MVC 5"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"REST Services"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"SOA"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"OAuth"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"ExpressJS"} />
                  <ResumeOtherSkill color={this.props.theme.COLOR_3} text={"Firebase"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}