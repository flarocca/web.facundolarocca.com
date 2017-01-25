import React, { Component } from 'react';
import AppStore from '../../stores/AppStore';
import { Element, scroller } from 'react-scroll';

export default class ResumeMobile extends Component {
  constructor(props) {
    super(props);

    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._renderWebDotComExp = this._renderWebDotComExp.bind(this);
    this._renderIsbanExp = this._renderIsbanExp.bind(this);
    this._renderAndreaniExp = this._renderAndreaniExp.bind(this);
    this._renderOpenSolutionsExp = this._renderOpenSolutionsExp.bind(this);
    this._rederSkill = this._rederSkill.bind(this);
    this._renderSkillPoints = this._renderSkillPoints.bind(this);
    this._rederOtherSkill = this._rederOtherSkill.bind(this);
    this.state = {
      languageSet: this.props.languageSet,
      theme: this.props.theme,
      checked: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onAppSessionChange);

    window.addEventListener('scroll', () => {
      if (event.srcElement.body.scrollTop >= 1400) {
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
    if (menu === 'RESUME') {
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
      <div id="resume-mobile" className="Container column" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="RESUME" />
        <span style={{ textAlign: "left", fontSize: "20px", color: this.state.theme.COLOR_3 }}>
          <b id="Resume-title-mobile">{this.state.languageSet.RESUME}</b>
        </span>
        <hr />
        <div className="Container column jc-center">
          <h2 style={{ alignSelf: "flex-start", color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PROFESSIONAL}</h2>
          <div className="Container column jc-start" style={{ color: this.state.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                {this._renderWebDotComExp()}
                {this._renderIsbanExp()}
                {this._renderAndreaniExp()}
                {this._renderOpenSolutionsExp()}
              </div>
            </div>
          </div>
          <h2 style={{ alignSelf: "flex-start", color: this.state.theme.COLOR_3 }}>{this.state.languageSet.SKILLS}</h2>
          <div className="Container column jc-start" style={{ color: this.state.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <div className="Container column">
                  {this._rederSkill(9, "C#")}
                  {this._rederSkill(7, "JavaScript")}
                  {this._rederSkill(6, "ReactJS / React-Native")}
                  {this._rederSkill(6, "NodeJS")}
                  {this._rederSkill(8, "CSS / HTML")}
                  {this._rederSkill(7, "SQL Server")}
                  {this._rederSkill(7, "ORACLE")}
                </div>
              </div>
            </div>

            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.OTHER_SKILLS}</h3>
                <div className="Container row" style={{ marginLeft: "15px", flexWrap: "wrap" }}>
                  {this._rederOtherSkill("TDD")}
                  {this._rederOtherSkill("Scrum")}
                  {this._rederOtherSkill("MongoDB")}
                  {this._rederOtherSkill("ElasticSearch")}
                  {this._rederOtherSkill("Flux")}
                  {this._rederOtherSkill("Firebase")}
                  {this._rederOtherSkill(".Net MVC 5")}
                  {this._rederOtherSkill("REST Services")}
                  {this._rederOtherSkill("SOA")}
                  {this._rederOtherSkill("OAuth")}
                  {this._rederOtherSkill("ExpressJS")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _rederOtherSkill(text) {
    return (
      <span className="resume-item skill" style={{ fontSize: "small", color: "white", backgroundColor: this.state.theme.COLOR_3 }}>{text}</span>
    );
  }

  _rederSkill(points, text) {
    return (
      <div>
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.state.theme.COLOR_3 }} />
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ paddingLeft: "3px", paddingBottom: "6px", textAlign: "left", color: this.state.theme.COLOR_3 }}><b>{text}</b></span>
          </div>
        </div>
        {this._renderSkillPoints(points, this.state.theme.COLOR_3)}
      </div>
    );
  }

  _renderSkillPoints(points, color) {
    var renderedPoints = [];

    for (let i = 0; i < points; i++) {
      renderedPoints.push(<div key={i} className="dot-skill" style={{ backgroundColor: color }} />);
    }

    for (let i = points; i < 10; i++) {
      renderedPoints.push(<div key={i} className="dot-skill" style={{ backgroundColor: "#B4B2B2" }} />);
    }

    return (
      <div className="Container row" style={{ marginBottom: "20px" }}>
        {renderedPoints}
      </div>
    );
  }

  _renderWebDotComExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.state.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>{this.state.languageSet.NOV + " 2016 - " + this.state.languageSet.PRESENT}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Web.com</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.WEB_DOT_COM}
          </p>
        </div>
      </div>
    );
  }

  _renderIsbanExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.state.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>{this.state.languageSet.FEB + " 2015 - " + this.state.languageSet.NOV + " 2016"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Isban</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.ISBAN}
          </p>
        </div>
      </div>
    );
  }

  _renderAndreaniExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.state.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>{this.state.languageSet.OCT + " 2012 - " + this.state.languageSet.FEB + " 2015"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Andreani</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.ANDREANI}
          </p>
        </div>
      </div>
    );
  }

  _renderOpenSolutionsExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.state.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>{this.state.languageSet.NOV + " 2008 - " + this.state.languageSet.SEP + " 2012"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Open Solutions</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.OPEN_SOLUTIONS}
          </p>
        </div>
      </div>
    );
  }
}