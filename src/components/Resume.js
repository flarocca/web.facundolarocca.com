import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import { Element, scroller } from 'react-scroll';
import ImageProvider from '../services/ImageProvider';
import { Link } from 'react-router'

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this._imageProvider = new ImageProvider();
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
              <div className="Container column" style={{backgroundColor: "#B4B2B2", display: "block", width: "10px", marginTop: "20px", marginRight: "30px"}}></div>
              <div>
                <h2 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PROFESSIONAL}</h2>
                <div className="Container column">
                  <div className="Container row">
                    <div className="resume-exp-dot" style={{ backgroundColor: this.state.theme.COLOR_3 }}></div>
                    <div style={{ position: "relative" }}>
                      <span className="resume-exp-date" style={{ color: "white", backgroundColor: this.state.theme.COLOR_3 }}><b>Nov 2016 - Present</b></span>
                    </div>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <h2>Web.com</h2>
                    <p style={{ color: this.state.theme.FONT_COLOR }}>
                      {this.state.languageSet.PROF_DESC}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Container column jc-start column-item-x2" id="personal" style={{ color: this.state.theme.COLOR_3 }}>
            <h2 style={{ color: this.state.theme.COLOR_3 }}>{this.state.languageSet.PERSONAL}</h2>
            <p className="text" style={{ color: this.state.theme.FONT_COLOR }}>
              {this.state.languageSet.PER_DESC}
            </p>
          </div>
        </div>
      </div>
    );
  }
}