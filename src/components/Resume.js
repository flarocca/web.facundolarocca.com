import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ImageProvider from '../services/ImageProvider';

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
    this._onAppSessionChange = this._onAppSessionChange.bind(this);
    this._renderWebDotComExp = this._renderWebDotComExp.bind(this);
    this._renderIsbanExp = this._renderIsbanExp.bind(this);
    this._renderAndreaniExp = this._renderAndreaniExp.bind(this);
    this._renderOpenSolutionsExp = this._renderOpenSolutionsExp.bind(this);
    this._rederSkill = this._rederSkill.bind(this);
    this._renderSkillPoints = this._renderSkillPoints.bind(this);
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
        duration: 1000,
        delay: 0,
        smooth: true,
        offset: -50
      });
    }
  }

  render() {
    return (
      <div id="resume" className="Container column" style={{ backgroundColor: this.state.theme.BACKGROUND_COLOR }}>
        <Element name="RESUME" />
        <span style={{ fontSize: "40px", color: this.state.theme.COLOR_3 }}>
          <input type="checkbox" id="Resume-chk" style={{ display: "none" }} checked={this.state.checked} />
          <b id="Resume-title">{this.state.languageSet.RESUME}</b>
        </span>
        <hr />
        <div className="Container row jc-center">
          <div className="Container column jc-start column-item-x2" id="professional" style={{ color: this.state.theme.COLOR_3 }}>
            <div className="Container row">
              <div style={{ backgroundColor: "#B4B2B2", display: "block", width: "5px", marginTop: "26px", marginBottom: "18px", marginRight: "30px" }}></div>
              <div style={{ textAlign: "left" }}>
                <h2 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PROFESSIONAL}</h2>
                {this._renderWebDotComExp()}
                {this._renderIsbanExp()}
                {this._renderAndreaniExp()}
                {this._renderOpenSolutionsExp()}
              </div>
            </div>
          </div>
          <div className="Container column jc-start column-item-x2" id="personal" style={{ color: this.state.theme.COLOR_3 }}>
            <div className="Container row">
              <div style={{ backgroundColor: "#B4B2B2", display: "block", width: "2px", marginTop: "26px", marginBottom: "0px", marginRight: "30px" }}></div>
              <div style={{ textAlign: "left" }}>
                <h2 style={{ color: this.state.theme.COLOR_3 }}>SKILLS</h2>
                <div className="Container column">
                  {this._rederSkill(9, "C#")}
                  {this._rederSkill(7, "JavaScript")}
                  {this._rederSkill(6, "CSS / HTML")}
                  {this._rederSkill(7, "SQL Server")}
                  {this._rederSkill(7, "ORACLE")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  /*
          <div style={{ position: "relative" }}>
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>{text}</b></span>
          </div>
  */

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
      renderedPoints.push(<div className="dot-skill" style={{ backgroundColor: color }} />);
    }

    for (let i = 0; i < (10 - points); i++) {
      renderedPoints.push(<div className="dot-skill" style={{ backgroundColor: "#B4B2B2" }} />);
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
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>Nov 2016 - Present</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Web.com</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.PROF_DESC}
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
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>Nov 2016 - Present</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Isban</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.PROF_DESC}
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
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>Nov 2016 - Present</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Andreani</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.PROF_DESC}
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
            <span className="resume-item" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>Nov 2016 - Present</b></span>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3>Open Solutions</h3>
          <p style={{ color: this.state.theme.FONT_COLOR }}>
            {this.state.languageSet.PROF_DESC}
          </p>
        </div>
      </div>
    );
  }
}