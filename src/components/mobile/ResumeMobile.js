import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class ResumeMobile extends Component {
  constructor(props) {
    super(props);

    this._onScroll = this._onScroll.bind(this);
    this._renderWebDotComExp = this._renderWebDotComExp.bind(this);
    this._renderIsbanExp = this._renderIsbanExp.bind(this);
    this._renderAndreaniExp = this._renderAndreaniExp.bind(this);
    this._renderOpenSolutionsExp = this._renderOpenSolutionsExp.bind(this);
    this._rederSkill = this._rederSkill.bind(this);
    this._renderSkillPoints = this._renderSkillPoints.bind(this);
    this._rederOtherSkill = this._rederOtherSkill.bind(this);
    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll, false);
  }

  _onScroll(event) {
    if (event.srcElement.body.scrollTop >= 1400) {
      this.setState({ checked: true });
    }
  }

  render() {
    return (
      <div id="resume-mobile" className="Container column" style={{ backgroundColor: this.props.theme.BACKGROUND_COLOR }}>
        <Element name="RESUME" />
        <span style={{ textAlign: "left", fontSize: "20px", color: this.props.theme.COLOR_3 }}>
          <b id="Resume-title-mobile">{this.props.languageSet.RESUME}</b>
        </span>
        <hr />
        <div className="Container column jc-center">
          <h2 style={{ alignSelf: "flex-start", color: this.props.theme.COLOR_3 }}>{this.props.languageSet.PROFESSIONAL}</h2>
          <div className="Container column jc-start" style={{ color: this.props.theme.COLOR_3 }}>
            <div className="Container row" style={{ borderLeft: "solid 2px #B4B2B2", paddingLeft: "30px" }}>
              <div style={{ textAlign: "left" }}>
                {this._renderWebDotComExp()}
                {this._renderIsbanExp()}
                {this._renderAndreaniExp()}
                {this._renderOpenSolutionsExp()}
              </div>
            </div>
          </div>
          <h2 style={{ alignSelf: "flex-start", color: this.props.theme.COLOR_3 }}>{this.props.languageSet.SKILLS}</h2>
          <div className="Container column jc-start" style={{ color: this.props.theme.COLOR_3 }}>
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
                <h3 style={{ color: this.props.theme.COLOR_3 }}>{this.props.languageSet.OTHER_SKILLS}</h3>
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
      <span className="resume-item skill" style={{ fontSize: "small", color: "white", backgroundColor: this.props.theme.COLOR_3 }}>{text}</span>
    );
  }

  _rederSkill(points, text) {
    return (
      <div>
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.props.theme.COLOR_3 }} />
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ paddingLeft: "3px", paddingBottom: "6px", textAlign: "left", color: this.props.theme.COLOR_3 }}><b>{text}</b></span>
          </div>
        </div>
        {this._renderSkillPoints(points, this.props.theme.COLOR_3)}
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
          <div className="dot" style={{ backgroundColor: this.props.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.props.theme.COLOR_3 }}><b>{this.props.languageSet.NOV + " 2016 - " + this.props.languageSet.PRESENT}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2>Web.com</h2>
          <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.WEB_DOT_COM}
          </p>
        </div>
      </div>
    );
  }

  _renderIsbanExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.props.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.props.theme.COLOR_3 }}><b>{this.props.languageSet.FEB + " 2015 - " + this.props.languageSet.NOV + " 2016"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2>Isban</h2>
          <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.ISBAN}
          </p>
        </div>
      </div>
    );
  }

  _renderAndreaniExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.props.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.props.theme.COLOR_3 }}><b>{this.props.languageSet.OCT + " 2012 - " + this.props.languageSet.FEB + " 2015"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2>Andreani</h2>
          <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.ANDREANI}
          </p>
        </div>
      </div>
    );
  }

  _renderOpenSolutionsExp() {
    return (
      <div className="Container column">
        <div className="Container row">
          <div className="dot" style={{ backgroundColor: this.props.theme.COLOR_3 }}></div>
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.props.theme.COLOR_3 }}><b>{this.props.languageSet.NOV + " 2008 - " + this.props.languageSet.SEP + " 2012"}</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2>Open Solutions</h2>
          <p className="text" style={{ color: this.props.theme.FONT_COLOR }}>
            {this.props.languageSet.OPEN_SOLUTIONS}
          </p>
        </div>
      </div>
    );
  }
}