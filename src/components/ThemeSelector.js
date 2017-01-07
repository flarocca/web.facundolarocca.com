import React, { Component } from 'react';
import Setting from '../images/svg/Setting';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import LIGHT_BLUE_THEME from '../constants/themes/LIGHT_BLUE_THEME';
import LIGHT_RED_THEME from '../constants/themes/LIGHT_RED_THEME';
import DARK_GREEN_THEME from '../constants/themes/DARK_GREEN_THEME';
import DARK_RED_THEME from '../constants/themes/DARK_RED_THEME';
import COLORFUL_THEME from '../constants/themes/COLORFUL_THEME';
import DARK_YELLOW_THEME from '../constants/themes/DARK_YELLOW_THEME';
import LIGHT_YELLOW_THEME from '../constants/themes/LIGHT_YELLOW_THEME';
import LIGHT_PURPLE_THEME from '../constants/themes/LIGHT_PURPLE_THEME';

export default class ThemeSelector extends Component {
  constructor(props) {
    super(props);

    this._themes = [LIGHT_RED_THEME, LIGHT_YELLOW_THEME, LIGHT_PURPLE_THEME, DARK_RED_THEME, DARK_YELLOW_THEME, DARK_GREEN_THEME];

    this._renderMainThemes = this._renderMainThemes.bind(this);
    this._renderThemes = this._renderThemes.bind(this);
    this._onThemeSelected = this._onThemeSelected.bind(this);
    this._onAppSessionChange = this._onAppSessionChange.bind(this);

    this.state = {
      languageSet: this.props.languageSet
    }
  }

  componentDidMount() {

  }

  _onAppSessionChange() {
    this.setState({
      languageSet: AppStore.getLanguageSet()
    });
  }

  _onThemeSelected(themeName) {
    AppActions.themeSelected(themeName);
  }

  _renderMainThemes() {
    return (
      <div className="Container row" style={{ height: "80px", marginRight: "10%", marginLeft: "5%" }}>
        <div onClick={() => this._onThemeSelected(COLORFUL_THEME.NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "4%", marginRight: "8%", display: "absolute" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: COLORFUL_THEME.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
            <div style={{ display: "inline-block", width: "50%", height: "50%", backgroundColor: COLORFUL_THEME.COLOR_1 }}></div>
            <div style={{ display: "inline-block", width: "50%", height: "50%", backgroundColor: COLORFUL_THEME.COLOR_2 }}></div>
            <div style={{ display: "inline-block", width: "50%", height: "50%", backgroundColor: COLORFUL_THEME.COLOR_3 }}></div>
            <div style={{ display: "inline-block", width: "50%", height: "50%", backgroundColor: COLORFUL_THEME.COLOR_4 }}></div>
          </div>
        </div>
        <div onClick={() => this._onThemeSelected(LIGHT_BLUE_THEME.NAME)} style={{ height: "50px", width: "50%", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "relative" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: LIGHT_BLUE_THEME.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: LIGHT_BLUE_THEME.COLOR_1, display: "block" }} />
        </div>
      </div>
    );
  }

  _renderThemes() {
    let renderedThemes = [];

    for (let i = 0; i < this._themes.length; i++) {
      let item = this._themes[i];
      renderedThemes.push(
        <div key={item.NAME} onClick={() => this._onThemeSelected(item.NAME)} style={{ height: "30px", width: "30px", marginTop: "8%", marginBottom: "8%", marginLeft: "8%", marginRight: "4%", display: "block" }}>
          <div style={{ position: "relative", top: "0", left: "0", height: "80%", width: "80%", backgroundColor: item.BACKGROUND_COLOR, display: "block" }} />
          <div style={{ position: "relative", top: "-60%", right: "-20%", height: "80%", width: "80%", backgroundColor: item.COLOR_1, display: "block" }} />
        </div>
      );
    }

    return (renderedThemes);
  }

  render() {
    return (
      <div className="Container row fixed main" style={{ right: "0px", top: "40%" }}>
        <input type="checkbox" id="theme" />
        <label id="themeLabel" htmlFor="theme" style={{ background: "rgb(200, 200, 200)" }}>
          <Setting className="setting" innerColor="white" outerColor="rgb(200, 200, 200)" />
        </label>
        <div className="right column jc-center" style={{ backgroundColor: "rgb(200, 200, 200)" }}>
          <div className="Container column jc-center" style={{ color: "dimgray", textAlign: "center", height: "30px" }}>
            <b>Theme Selector</b>
          </div>
          {this._renderMainThemes()}
          <div className="Container row" style={{ flexWrap: "wrap", height: "60%" }}>
            {this._renderThemes()}
          </div>
        </div>
      </div>
    );
  }
}